Add-Type -AssemblyName System.Runtime.WindowsRuntime
$asTaskGeneric = ([System.WindowsRuntimeSystemExtensions].GetMethods() | Where-Object { 
    $_.Name -eq 'AsTask' -and $_.GetParameters().Count -eq 1 -and $_.GetParameters()[0].ParameterType.Name -eq 'IAsyncOperation`1' 
})[0]

function Await($WinRtTask, $ResultType) {
    $asTask = $asTaskGeneric.MakeGenericMethod($ResultType)
    $netTask = $asTask.Invoke($null, @($WinRtTask))
    $netTask.Wait(-1) | Out-Null
    return $netTask.Result
}

[Windows.Storage.StorageFile, Windows.Storage, ContentType=WindowsRuntime] | Out-Null
[Windows.Graphics.Imaging.BitmapDecoder, Windows.Graphics.Imaging, ContentType=WindowsRuntime] | Out-Null
[Windows.Media.Ocr.OcrEngine, Windows.Media.Ocr, ContentType=WindowsRuntime] | Out-Null

$engine = [Windows.Media.Ocr.OcrEngine]::TryCreateFromUserProfileLanguages()
Write-Output "Engine language: $($engine.RecognizerLanguage.LanguageTag)"

$files = Get-ChildItem "C:\Users\jaint\Downloads\WhatsApp Image 2026-10-31*.jpeg"
foreach ($f in $files) {
    try {
        $storageFileTask = [Windows.Storage.StorageFile]::GetFileFromPathAsync($f.FullName)
        $storageFile = Await $storageFileTask ([Windows.Storage.StorageFile])

        $streamTask = $storageFile.OpenAsync([Windows.Storage.FileAccessMode]::Read)
        $stream = Await $streamTask ([Windows.Storage.Streams.IRandomAccessStream])

        $decoderTask = [Windows.Graphics.Imaging.BitmapDecoder]::CreateAsync($stream)
        $decoder = Await $decoderTask ([Windows.Graphics.Imaging.BitmapDecoder])

        $bitmapTask = $decoder.GetSoftwareBitmapAsync()
        $bitmap = Await $bitmapTask ([Windows.Graphics.Imaging.SoftwareBitmap])

        $ocrTask = $engine.RecognizeAsync($bitmap)
        $result = Await $ocrTask ([Windows.Media.Ocr.OcrResult])

        $lines = ($result.Lines | ForEach-Object { $_.Text }) -join " "
        Write-Output "$($f.Name) ===> $lines"
    } catch {
        Write-Output "$($f.Name) ===> ERROR: $_"
    }
}
