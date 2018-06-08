/**
 *
 * Created by king on 9/13/2017.
 */

/*
 [{
 chapterTitle:'',
 videos:[
 title:'',
 id:''
 ]
 }]*/

var http = require('http');
var cheerio = require('cheerio');
var url = 'http://www.imooc.com/learn/348';
function fillterChapters(html) {
    var $ = cheerio.load(html);
    var chapters = $('.learnchapter');

    var couseData = [];
    chapters.each(function (item) {
        var chapter = $(this);
        var chapterTitle = chapter.find('strong').text();
        var videos = chapter.find('.video').children('li');
        var chapterData = {
            chapterTitle: chapterTitle,
            videos:[]
        };
        videos.each(function (item) {
            var video = $(this).find('.studyvideo');
            var videoTitle = video.text();
            var id = video.attr('href').split('video/')[1];
            chapterData.videos.push({
                title:videoTitle,
                id:id
            })
        })
        couseData.push(chapterData);
    })
    return couseData;
}

function printCourseInfo(couseData) {
    couseData.forEach(function (item) {
        var chapterTitle = item.chapterTitle;
        console.log(chapterTitle + '\n');
        item.videos.forEach(function (video) {
            console.log('  【'+video.id + '】' + video.title + '\n');
        })
    })
}

http.get(url,function (response) {
    var html= '';

    response.on('data',function (data) {
        html += data;
    })

    response.on('end',function () {
        console.log(typeof html);
       var couseData = fillterChapters(html);
       printCourseInfo(couseData);
    })
}).on('error',function () {
    console.log('获取数据出错！');
})
