import { v4 as uuidv4 } from "uuid";
import mot from "./assets/audios/По душам   МОТ.mp3"
import minut from "./assets/audios/Я люблю тебя   Rauf   Faik.mp3"
import jony from "./assets/audios/Титры   JONY.mp3"
import jony1 from './assets/audios/Звезда   JONY.mp3'
import jony2 from './assets/audios/Наверно,_ты_меня_не_помнишь_JONY,_HammAli.mp3'
import nepesniye from "./assets/audios/Небесные розы   JONY.mp3"
import rauf from "./assets/audios/Детство (Perox Edit)   PEROX, Rauf   Faik.mp3"
import rauf2 from "./assets/audios/5 минут    Rauf   Faik.mp3"
import soprano from "./assets/audios/Мот - Сопрано (feat. Ани Лорак)   МоТ.mp3"
import kecholmayman from "./assets/audios/Kecholmayman   Oybek   Nigora.mp3"
import kecholmayman2 from "./assets/audios/Yaxshi bo lardi   Oybek   Nigora.mp3"
import kecholmayman3 from "./assets/audios/Shirintoyim – Oybek va Nigora.mp3"
import letmedown from "./assets/audios/Let Me Down Slowly   Alec Benjamin.mp3"

function MusicData() {
  return [
    {
      name: "Звезда",
      cover:
        "https://yho.moe/wp-content/uploads/2020/08/06_mir_soshel_s_uma_jony-770x770.jpg",
      artist: "JONY",
      audio: jony1,
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Титры",
      cover:
        "https://yho.moe/wp-content/uploads/2020/08/06_mir_soshel_s_uma_jony-770x770.jpg",
      artist: "JONY",
      audio: jony,
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Я люблю тебя",
      cover:
        "https://myzfan.com/uploads/posts/2018-11/1541950356_05b99fd811.jpg",
      artist: "Rauf Faik",
      audio: minut,
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Детство",
      cover:
        "https://myzfan.com/uploads/posts/2018-11/1541950356_05b99fd811.jpg",
      artist: "Rauf Faik",
      audio: rauf,
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "5 минут",
      cover:
        "https://myzfan.com/uploads/posts/2018-11/1541950356_05b99fd811.jpg",
      artist: "Rauf Faik",
      audio: rauf2,
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "По душам",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      artist: "МОТ",
      audio: mot,
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Сопрано",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      artist: "МОТ",
      audio: soprano,
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Небесные розы",
      cover:
        "https://yho.moe/wp-content/uploads/2020/08/06_mir_soshel_s_uma_jony-770x770.jpg",
      artist: "JONY",
      audio: nepesniye,
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Наверно,ты меня не помнишь",
      cover:
        "https://yho.moe/wp-content/uploads/2020/08/06_mir_soshel_s_uma_jony-770x770.jpg",
      artist: "JONY,HammAli",
      audio: jony2,
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Kecholmayman",
      cover:
        "https://lh3.googleusercontent.com/LCB1mWGS5AYSlV4x-doWBRUFYBa9RABPHUQZY0AQSZia0ARIzKEa0Rn5Th9r4IKMqw_9jLS36yrjtSzl=w544-h544-l90-rj",
      artist: "Oybek Nigora",
      audio: kecholmayman,
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Yaxshi bo'lardi",
      cover:
        "https://lh3.googleusercontent.com/LCB1mWGS5AYSlV4x-doWBRUFYBa9RABPHUQZY0AQSZia0ARIzKEa0Rn5Th9r4IKMqw_9jLS36yrjtSzl=w544-h544-l90-rj",
      artist: "Oybek Nigora",
      audio: kecholmayman2,
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Shirintoyim",
      cover:
        "https://lh3.googleusercontent.com/LCB1mWGS5AYSlV4x-doWBRUFYBa9RABPHUQZY0AQSZia0ARIzKEa0Rn5Th9r4IKMqw_9jLS36yrjtSzl=w544-h544-l90-rj",
      artist: "Oybek Nigora",
      audio: kecholmayman3,
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Let Me Down Slowly",
      cover:
        "https://lh3.googleusercontent.com/LCB1mWGS5AYSlV4x-doWBRUFYBa9RABPHUQZY0AQSZia0ARIzKEa0Rn5Th9r4IKMqw_9jLS36yrjtSzl=w544-h544-l90-rj",
      artist: "Alec Benjamin",
      audio: letmedown,
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    //ADD MORE HERE
  ];
}

export default MusicData;
