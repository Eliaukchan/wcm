//1.使用ES6的模块化的语法导入jquery
import $ from 'jquery'

//2.实现隔行变色效果

$(function() {
    $('li:odd').css('backgroundColor','red')
    $('li:even').css('backgroundColor','yellow')
})