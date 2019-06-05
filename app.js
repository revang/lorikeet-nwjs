'use strict';

const fs=require('fs');
const osenv=require('osenv');

function getUsersHomeFolder(){
    return osenv.home();
}

function getFilesInFolder(folderPath,cb){
    fs.readdir(folderPath,cb);
}

function main(){
    const folderPath=getUsersHomeFolder();
    getFilesInFolder(folderPath,(err,files)=>{
        if(err){
            return alert('Sorry, we could not load your home folder.');
        }
        files.forEach((file)=>{
            console.log(`${folderPath}/${file}`);
        })
    })
}

module.exports={
    getFilesInFolder:getFilesInFolder,
    getUsersHomeFolder:getUsersHomeFolder,
    main:main
}
