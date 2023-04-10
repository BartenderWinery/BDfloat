/**
 * @name BDfloat
 * @version 1.7
 * @description Recreates the BetterDiscord's float API and expands upon it for developer use
 * @author An0
 * @source https://github.com/An00nymushun/DiscordFreeEmojis
 * @updateUrl https://raw.githubusercontent.com/An00nymushun/DiscordFreeEmojis/main/DiscordFreeEmojis64px.plugin.js
 */
var BDfloat=(()=>{
    var Discord
    var Utils={}
    var initialized=false
    function init(){
        Discord={window:(typeof(unsafeWindow)!=='undefined')?unsafeWindow:window}
        initialized=true
        return 1}
    function Start(){
        if(!initialized&&init()!==1)return
        console.log("Temp: BDFLOAT LOADED; DEVELOPER BUILD")}
    function Stop(){
        if(!initialized)return}
    return function(){return{
        getName:()=>"BDfloat",
        getShortName:()=>"BDFloat",
        getDescriptionName:()=>"Recreates the BetterDiscord's float API and expands upon it for developer use",
        getVersion:()=>"1.0",
        getAuthor:()=>"/ari#0939",
        start:Start,
        stop:Stop}}})()
module.exports=BDfloat