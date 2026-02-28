$historyDir = "C:\Users\HP\AppData\Roaming\Code\User\History"
$entriesFiles = Get-ChildItem -Path $historyDir -Filter "entries.json" -Recurse -ErrorAction SilentlyContinue

$restoredFiles = @()

foreach ($entryFile in $entriesFiles) {
    try {
        $json = Get-Content $entryFile.FullName -Raw | ConvertFrom-Json
        $resource = $json.resource
        
        # Check if the file belongs to our project and was deleted
        if ($resource -like "*rajadiglobal/src/*" -or $resource -like "*rajadiglobal\src\*") {
            # Convert URI format to normal path if needed
            $resourcePath = $resource -replace 'file:///', '' -replace '%3A', ':' -replace '/', '\'
            
            # If the file does not exist currently
            if (-not (Test-Path $resourcePath)) {
                $dirPath = Split-Path $resourcePath -Parent
                if (-not (Test-Path $dirPath)) {
                    New-Item -ItemType Directory -Force -Path $dirPath | Out-Null
                }
                
                # Get the latest entry
                $latestEntry = $json.entries[-1]
                $backupFile = Join-Path $entryFile.Directory.FullName $latestEntry.id
                
                if (Test-Path $backupFile) {
                    Copy-Item $backupFile -Destination $resourcePath -Force
                    $restoredFiles += $resourcePath
                }
            }
        }
    }
    catch {
        # Ignore parse errors
    }
}

$restoredFiles | Write-Output
