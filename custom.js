console.log("custom.js");

const appUrl = "https://www.cotogoto.ai/webapi/noby.json";
const appKey = '';// NobyAppKey

window.onload = function () {
    // console.log("onload!!");

    $("#myBtn").click(() => {
        // console.log("Hello!!");
        let text = $("#myText").val();
        let nameMe = "Me:";
        appendChat(nameMe + text);

        let getData = {
            "text": text
            , "appkey": appKey
            //NobyAPIコマンド
            , study: '1'//0:学習なし、1:学習あり
            , persona: '3'//０：ノーマル、1:ツンデレ女子、2:ツンデレ男子、3:神様
            , ending: 'のじゃ'//言葉の語尾設定
        };
        $.get(appUrl, getData, (data) => {
            let text = data.text;

            //console.log("text:" + text);
            let emotionList = data.emotionList;
            //console.log(emotionList);
            let negaposiList = data.negaposiList;
            //console.log(negaposiList);
            let nameGod = "God:";
            appendChat(nameGod + text);
        });
    });

    function appendChat(str) {
        // $("#myChat").append("<li>" + str + "</li>");

        //Youなら右側に吹き出しを出す、Godなら左側に吹き出しを出す
        //(str.indexOf("") >= 0)はstrに””を含むの意
        if (str.indexOf("Me") >= 0) {
            $("#myChat").append("<il><p class='right_balloon'>" + str + "</p><p class='clear_balloon'></p></il>");
        }
        else {
            $("#myChat").append("<il><p class='left_balloon'>" + str + "</p><p class='clear_balloon'></p></il>");
        }
    }
}

