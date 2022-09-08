fx_version 'cerulean'
game 'gta5'
lua54 'yes'

dependency 'es_extended'
dependency 'ox_inventory'

shared_scripts {
    '@es_extended/imports.lua',
    'shared/config.lua',
}

client_script "client/main.lua"

server_script "server/main.lua"

ui_page "html/index.html"

files {
    'html/index.html',
    'html/index.js',
    'html/index.css',
    'html/reset.css',
    'html/img/*.*'
}