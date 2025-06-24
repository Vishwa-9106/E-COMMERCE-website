$env:SANITY_STUDIO_PROJECT_ID = "mlkk1evm"
$env:SANITY_STUDIO_DATASET = "production"
$env:SANITY_STUDIO_API_VERSION = "2024-03-20"
$env:SANITY_API_WRITE_TOKEN = "skCrLUksFhjeot7cTKxVYXiGDValZQgbRk0e6pxWsze2FEnAlVDrGIJ2GeXH9JQ4KHV0zsSaISBMNvUjqunUKHLUnQzo1SvlNzLM3W1XJgsFwVOnDrGlDWuxoDyM4mhuYiLloTUbndz2jo6glygMB5YyVU02nExVryVfCrZiwYSCH1eJ7Bs9"
 
Write-Host "Running seed script..."
npx tsx sanity/seed.ts 