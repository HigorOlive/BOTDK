/*
* JANGAN UBAH-UBAH INFO!!!
* "JANGAN MODAL NAMA DOANG BRO!!!"
* SCRIPT BY ARIS187 ID
* JANGAN MODAL NAMA DOANG BOSQ
* HARGAILAH YG MEMBUAT SCRIPT INI BOSQ
* JANGAN UBAH-UBAH INFO!!!
* ARIS187 ID
* BOLEH UBAH TAPI KECUALI INFO!!!
*/
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const fs = require("fs")

const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const arrayBulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']

const bulan = arrayBulan[moment().format('MM') - 1]

const config = {
    A187: '📍D4RKBOT📍',
    instagram: 'OFF',
    nomer: 'wa.me/21997123716',
    aktif: '24 JAM',
    youtube: 'https://youtube.com/channel/UCRaC-6JyCW_iqbW1DbuXVxQ',
    whatsapp: 'https://chat.whatsapp.com/KTlC0MXi3WJChdQeps5flt',
    tanggal: `TANGGAL: ${moment().format('DD')} ${bulan} ${moment().format('YYYY')}`,
    waktu: time
}

const { A187, tanggal, waktu, instagram, whatsapp, youtube, nomer, aktif, ontime } = config

const
{
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   waChatKey,
} = require("@adiwajshing/baileys")

const {
    help,
    menu1,
    menu2,
    menu3,
    info,
    donate,
    alay,
    artinama,
    corona,
    kbbi,
    downloadImage,
    igStalk,
    jodoh,
    jsholat,
    lirik,
    nulis,
    readTextInImage,
    pantun,
    quotes,
    searchYoutube,
    surah,
    tiktokdl,
    tweetdl,
    wiki,
    ytdl,
    bucin,
    cersex,
    cerpen,
    puisi1,
    puisi2,
    resep,
    namaninja,
    bitly,
    nekonime,
    cektanggal,
    chord,
    zodiak,
    fb,
    simi,
    wikien,
    spamsms,
    spamcall,
    spamgmail,
    covidcountry,
    infoanime,
    gay,
    ytmp3,
    ssweb,
    infogempa,
    indohot,
    loli,
    ttp,
    map,
    waifu
} = require('./lib')

const { animPict, cewePict, cowoPict } = require('./lib/pict')

const { exec } = require("child_process")

const client = new WAConnection()

client.on('qr', qr => {
   qrcode.generate(qr, { small: true })
   console.log(`[ ${time} ] QR code is ready, subscribe Aris187 ID`)
})

client.on('credentials-updated', () => {
   const authInfo = client.base64EncodedAuthInfo()
   console.log(`credentials updated!`)

   fs.writeFileSync('./session.json', JSON.stringify(authInfo, null, '\t'))
})

fs.existsSync('./session.json') && client.loadAuthInfo('./session.json')

client.connect();

// client.on('user-presence-update', json => console.log(json.id + ' presence is => ' + json.type)) || console.log(`${time}: Bot by ig:@aditiaalfians`)

client.on('message-status-update', json => {
   const participant = json.participant ? ' (' + json.participant + ')' : ''
   console.log(`[ ${time} ] => bot by ig:@_sadboy.ig`)
})

client.on('message-new', async (m) => {
   const messageContent = m.message
   const text = m.message.conversation
   const messageType = Object.keys(messageContent)[0]

   const re = /[\#\!\@\/\?\%\$\.]/

   const value = text.split(' ').splice(1).join(' ')

   let id = m.key.remoteJid
   let imageMessage = m.message.imageMessage

   const prefix = messageType === 'imageMessage' ? imageMessage.caption.split(' ')[0].split(re)[1] : text.split(' ')[0].split(re)[1] // multiple prefix

   console.log(`[ ${time} ] => Nomor: [ ${id.split("@s.whatsapp.net")[0]} ] => ${text}`);

   switch (prefix) {
       case 'help':
           client.sendMessage(id, help.help(id, A187, tanggal, waktu, whatsapp, youtube, instagram, aktif, nomer, ontime), MessageType.text)
           break
       case 'menu1':
           client.sendMessage(id, menu1.menu1(id, A187, tanggal, waktu, whatsapp, youtube, instagram, aktif, nomer, ontime), MessageType.text)
           break
       case 'menu2':
           client.sendMessage(id, menu2.menu2(id, A187, tanggal, waktu, whatsapp, youtube, instagram, aktif, nomer, ontime), MessageType.text)
           break
       case 'menu3':
           client.sendMessage(id, menu3.menu3(id, A187, tanggal, waktu, whatsapp, youtube, instagram, aktif, nomer, ontime), MessageType.text)
           break
      case 'donate':
           client.sendMessage(id, donate.donate(id, A187, tanggal, waktu, whatsapp, youtube, instagram, aktif, nomer, ontime), MessageType.text)
           break          
      case 'info':
           client.sendMessage(id, info.info(id, A187, tanggal, waktu, whatsapp, youtube, instagram,aktif, nomer, ontime), MessageType.text)
           break             
       case 'nulis':
           nulis(value)
               .then(data => {
                   client.sendMessage(id, '[ESPERE UM POUCO...', MessageType.text)
                   client.sendMessage(id, data, MessageType.image)
               })
               .catch(err => {
                   console.log(err)
               })
           break
       case 'say':
           await client.sendMessage(id, value, MessageType.text)
           break
       case 'ytmp3':
           ytdl('mp3', value)
               .then(data => {
                   const { judul, size, hasil: link } = data
                   let hasil = `OLA AQUI ESTA O LINK DE DOWNLOAD DA MSC\nCLIQUE NO LINK ABAIXO:\nMUSICA: ${judul}\n\nTamanho Do audio: ${size}\n\nLink: ${link}`
                   client.sendMessage(id, '[ESPERE UM POUCO...', MessageType.text)
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
       case 'ytmp4':
           ytdl('mp4', value)
               .then(data => {
                   const { judul, size, hasil: link } = data
                   let hasil = `OLA AQUI ESTA O LINK DE DOWNLOAD DA MSC\nCLIQUE NO LINK ABAIXO:\nMUSICA: ${judul}\n\nTamanho Do audio: ${size}\n\nLink: ${link}`
                   client.sendMessage(id, '[ESPERE UM POUCO...', MessageType.text)
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
       case 'twt':
           tweetdl(value)
               .then(data => {
                    const { size, hasil: link } = data
                    let hasil = `✄1�71ￄ1�77 Berhasil! silahkan klik link di bawah untuk mendownload hasilnya!\nKlik link dibawah🗡️\n\nSize: ${size}\n\nLink: ${link}`
                    client.sendMessage(id, '[ESPERE UM POUCO...', MessageType.text)
                    client.sendMessage(id, hasil ,MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
       case 'tiktok':
           tiktokdl(value)
               .then(data => {
                    const { url, nama, durasi, deskripsi } = data
                    let hasil = `✄1�71 ￄ 1/77 Sucesso !!! Clique no link abaixo para baixar os resultados! \nClique no link abaixo🗡️\n\nTítulo: ${deskripsi} \n\nDurasi: ${durasi}\n\nNome: ${nama}\n\nUrl: ${url}`;
                    client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
       case 'wiki':
           wiki(value)
               .then(data => {
                    const { hasil: res } = data
                    let hasil = `📝De acordo com Wikipedia:\n\n${res}`
                    client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
       case 'sholat':
           jsholat(value)
               .then(data => {
                   const { Imsyak, Subuh, Dzuhur, Ashar, Maghrib, Isya, Dhuha } = data
                   let hasil = `Momentos de oração em *${value}* hoje é\n\n⚡Imsak : ${Imsyak}\n⚡Subuh : ${Subuh} WIB\n⚡Dzuhur : ${Dzuhur}WIB\n⚡Asr: ${Ashar} WIB\n⚡Maghrib : ${Maghrib}\n⚡Isya : ${Isya} WIB\n⚡Tengah malam : ${Dhuha} WIB`
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
       case 'quran':
           surah()
               .then(data => {
                   const re = /{(.*?)}/gi
                   const { acak, surat } = data

                   const keterangan = acak.id.ayat.replace(re, '')
                   const arText = acak.ar.teks
                   const idText = acak.id.teks
                   const surah= surat.nama

                   let hasil = `[${keterangan}]   ${arText}\n\n${idText}(QS.${surah}, Ayat ${keterangan})`;
                   client.sendMessage(id, hasil, MessageType.text);
               })
               .catch(err => {
                   console.log(err)
               })
           break
       case 'pantun':
           pantun()
               .then(data => {
                   client.sendMessage(id, data, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
       case 'covid':
           corona()
               .then(data => {
                   const { meninggal, sembuh, positif } = data
                   let hasil = `📌ÚLTIMOS DADOS DO DISTRITO COVID-19 DA INDONÉSIA\n\n📍Positivo ==> ${positif} \n📍Curado ==> ${sembuh} \n📍Morreu ==> ${meninggal}`
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
       case 'quotes':
           quotes()
               .then(data => {
                   const { author, quotes } = data
                   let hasil = `_${quotes}_\n\n~${author}`
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
       case 'nama':
           artinama(value)
               .then(data => {
                   const { result: arti } = data
                   let hasil = `\nArti nama mu adalah\n\n***********************************\n\n       _${value}_ ${arti}\n\n***********************************`
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
       case 'pasangan':
           jodoh(value)
               .then(data => {
                   const { positif, negatif } = data
                   const nama = value.split(/[\&\-\/\+]/)
                   let hasil = `\nKecocokan jodoh\n\n************************************\n\nPasangan 1: *${nama[0].trim()}*\nPasangan 2: *${nama[1].trim()}*\n\nsisi positif: ${positif}\nsisi negatif: ${negatif}\n\n***********************************`
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
       case 'pict':
           switch (value) {
               case 'cewek':
                   cewePict()
                       .then(buffer => {
                           client.sendMessage(id, '[ESPERE UM POUCO...', MessageType.text)
                           client.sendMessage(id, buffer, MessageType.image)
                       })
                       .catch(err => {
                           console.log(err)
                       })
                   break
               case 'cowok':
                   cowoPict()
                       .then(buffer => {
                           client.sendMessage(id, '[ESPERE UM POUCO...', MessageType.text)
                           client.sendMessage(id, buffer, MessageType.image)
                       })
                       .catch(err => {
                           console.log(err)
                       })
                   break
               default:
                   client.sendMessage(id, 'ulangi dengan  !pict cewek/cowok\n\nMisal: !pict cowok', MessageType.text)
                   break
           }
           break
       case 'animepict':
           animPict()
               .then(buffer => {
                   client.sendMessage(id, '[ESPERE UM POUCO...', MessageType.text)
                   client.sendMessage(id, buffer, MessageType.image)
               })
               .catch(err => {
                   console.log(err)
               })
           break
       case 'lirik':
           lirik(value)
               .then(data => {
                   const { hasil: lirik } = data
                   let hasil = `📍Letra da música📍 *${value}* \n\n\n${lirik}`
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
   case 'fb':
           fb(value)
               .then(data => {
                   const { resultHD, resultSD } = data
                   let hasil = `Escolha a resolução querida😙 \n\n\n HD ${resultHD} \n\n\n SD ${resultSD}`
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break       
       case 'alay':
           alay(value)
               .then(data => {
                   const { hasil: alay } = data
                   client.sendMessage(id, alay, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
       case 'sticker':
           const image = await client.downloadAndSaveMediaMessage(m)
           exec('cwebp -q 50 ' + image + ' -o temp/' + time + '.webp', (error, stdout, stderr) => {
               let result = fs.readFileSync('temp/' + time + '.webp')
               client.sendMessage(id, result, MessageType.sticker)
           })
           break
       case 'ocr':
           const media = await client.downloadAndSaveMediaMessage(m)
           readTextInImage(media)
               .then(data => {
                   client.sendMessage(id, `*Ola amigo o texto da imagem esta aqui.* \n\nResultado:: \n\n${data}`, MessageType.text);
               })
               .catch(err => {
                   console.log(err)
               })
           break
       case 'igstalk':
           igStalk(value)
               .then(data => {
                   const { Username, Jumlah_Followers, Jumlah_Following, Name, Jumlah_Post } = data
                   client.sendMessage(id, '[WAIT] Stalking...⏄1�71ￄ1�77', MessageType.text)
                   let hasil = `✨Bio do Instagram _${value}_ \n\n 🧶 *Nome do usuário* : ${Username}_ \n 🌀 *Nome* : _${Name}_ \n 🌟 *Número de Seguidores* : _${Jumlah_Followers}_ \n 🌠 *Total_Following* : _${Jumlah_Following}_ \n ⭄1�71ￄ1�77 *Jumlah_Post* : _${Jumlah_Post}_ `
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   client.sendMessage(id, err, MessageType.text)
               })
           break
           case 'cerpen':
           cerpen()
               .then(data => {
                   const { result } = data
                   let hasil = `_${result}_`
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
case 'puisi1':
           puisi1()
               .then(data => {
                   const { result} = data
                   let hasil = `_${result}_`
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
case 'puisi2':
           puisi2()
               .then(data => {
                   const { result} = data
                   let hasil = `_${result}_`
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
 case 'infogempa':
           infogempa()
               .then(data => {
                   const { lokasi, kedalaman, koordinat, magnitude, waktu } = data
                   let hasil = `*INFO GEMPA* \n\ *Lokasi* : _${lokasi}_ \n *Kedalaman* : _${kedalaman}_ \n *Koordinat* : _${koordinat}_ \n *Magnitude* : _${magnitude}_ \n *Waktu* : _${waktu}_`
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
   case 'chord':
           chord(value)
               .then(data => {
                   const { result } = data
                   let hasil = `Aqui estão os acordes da música *${value}* querida ♥️\n\n  _${result}_ `
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
   case 'kbbi':
           kbbi(value)
               .then(data => {
                   const { result } = data
                   let hasil = `*${value}* menurut KBBI ️\n\n  _${result}_ `
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break        
           
           case 'zodiak':
 zodiak(value)
               .then(data => {
                   const { lahir, ultah, usia, zodiak } = data
                   let hasil = `*Lahir* : _${lahir}_ n\n *Aniversário* : _${ultah}_ \n *Usia* : _${usia}_:\n *Zodíaco* : _${zodiak}_ `
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
  case 'simi':
            simi(value)
               .then(data => {
                   const { result } = data
                   let hasil = ` ${result} `
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
 case 'wikien':
           wikien(value)
               .then(data => {
                   const { result } = data
                   let hasil = `*♻️De acordo com a Wikipedia🗿:* \n\n  _${result}_ `
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
case 'spamgmail':
           spamgmail()
               .then(data => {
                   const { logs } = data
                   let hasil = `_${logs}_`
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
 case 'spamcall':
           spamcall()
               .then(data => {
                   const { logs } = data
                   let hasil = `_${logs}_`
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
  case 'spamsms':
           spamsms()
               .then(data => {
                   const { logs } = data
                   let hasil = `_${logs}_`
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
 case 'covidcountry':
           covidcountry(value)
               .then(data => {
                   const { country, active, casesPerOneMillion, critical, deathsPerOneMillion, recovered, testPerOneMillion, todayCases, todayDeath, totalCases, totalTest } = data
                   let hasil = `*Negara* : _${country}_ \n\n *Active* : _${active}_ \n *CasesPerOneMillion* : _${casesPerOneMillion}_ \n *Critical* : ${critical}\n *DeathsPerOneMillion* : _${deathsPerOneMillion}_ \n *Recovered* : _${recovered}_ \n *TestPerOneMillion* : _${testPerOneMillion}_ \n *TodayCases* : _${todayCases}_ \n *TodayDeath : _${todayDeath}\n *TotalCases* : _${totalCases}_ \n  *TotalTest* : _${totalTest}_ `
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
  case 'infoanime':
           infoanime(value)
               .then(data => {
                   const { result } = data
                   let hasil = `*INFO ANIME ${value} :* \n\n _${result}_  `
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
case 'gay':
           gay()
               .then(data => {
                   const { desc, persen } = data
                   let hasil = `*${desc} \n\n *Persen Gay Lo Su!!!* _${persen}_  `
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
  case 'indohot':
           indohot()
               .then(data => {
                   const { judul, genre, durasi, url } = data
                   let hasil = `Arrependimento GOBLOK😳* \n\n *Judul* _${judul}_ \n\n *Status* _${genre}_ \n\n *Durasi* _${durasi}_ \n\n *Link Bosq* _${url}_  `
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
case 'filmanime':
           filmanime(value)
               .then(data => {
                   const { title, rating, sinopis, video } = data
                   let hasil = `*Film Anime ${value} :* \n\n *Judul* _${title}_ \n\n *Rating* _${rating}_ \n\n *Info* _${sinopsis}_ \n\n *Link Video* _${video}_  `
                   client.sendMessage(id, hasil, MessageType.txext)
               })
               .catch(err => {
                   console.log(err)
               })
           break
 case 'resep':
           resep(value)
               .then(data => {
                   const { title, user,  datePublished, dificulty, times, serving, bahan, tutor } = data
                   let hasil = `*Judul:* ${title}\n*Penulis:* ${user}\n*Rilis:* ${datePublished}\n*Level:* ${dificulty}\n*Waktu:* ${times}\n*Porsi:* ${servings}\n\n*Bahan-bahan:*\n${ingredient}\n\n*Step-by-step:*\n ${step} `
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
  case 'namaninja':
           namaninja(value)
               .then(data => {
                   const { ninja } = data
                   let hasil = `Nama Ninja *${value}*💡:\n\n _${ninja}_ `
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
  case 'cektanggal':
           cektanggal(value)
               .then(data => {
                   const { tanggal, keterangan } = data
                   let hasil = `Menurut tanggal ${value} adalah\n\n *Tanggal* : _${tanggal}_ \n *Keterangan* : _${keterangan}_  `
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
   case 'bitly':
           bitly(value)
               .then(data => {
                   const { result } = data
                   let hasil = `Aqui maninha ja terminou☣️ :) \n\n${result} `
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
     case 'cersex':
           cersex()
               .then(data => {
                   const { result } = data
                   let hasil = `CERSEX \n\n${result} `
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
    case 'bucin':
           bucin()
               .then(data => {
                   const { desc } = data
                   let hasil = `_${desc}_ `
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
           case 'map':
           map()
               .then(buffer => {
                   client.sendMessage(id, '[ESPERE UM POUCO...', MessageType.text)
                   client.sendMessage(id, buffer, MessageType.image)
               })
               .catch(err => {
                   console.log(err)
               })
           break
           case 'waifu':
           waifu()
               .then(buffer => {
                   client.sendMessage(id, '[ESPERE UM POUCO...', MessageType.text)
                   client.sendMessage(id, buffer, MessageType.image)
               })
               .catch(err => {
                   console.log(err)
               })
           break
      case 'loli':
           loli()
               .then(buffer => {
                   client.sendMessage(id, '[ESPERE UM POUCO...', MessageType.text)
                   client.sendMessage(id, buffer, MessageType.image)
               })
               .catch(err => {
                   console.log(err)
               })
           break     
           case 'ssweb':
           ssweb()
               .then(buffer => {
                   client.sendMessage(id, '[ESPERE UM POUCO...', MessageType.text)
                   client.sendMessage(id, buffer, MessageType.image)
               })
               .catch(err => {
                   console.log(err)
               })
           break
     case 'cooltext':
           cooltext()
               .then(buffer => {
                   client.sendMessage(id, '[ESPERE UM POUCO...', MessageType.text)
                   client.sendMessage(id, buffer, MessageType.image)
               })
               .catch(err => {
                   console.log(err)
               })
           break      
           case 'ttp':
           ttp()
               .then(buffer => {
                   client.sendMessage(id, '[ESPERE UM POUCO...', MessageType.text)
                   client.sendMessage(id, buffer, MessageType.image)
               })
               .catch(err => {
                   console.log(err)
               })
           break
           case 'nekonime':
           nekonime()
               .then(buffer => {
                   client.sendMessage(id, '[ESPERE UM POUCO...', MessageType.text)
                   client.sendMessage(id, buffer, MessageType.image)
               })
               .catch(err => {
                   console.log(err)
               })
           break
           case 'ytmp3':
           mp3()
               .then(buffer => {
                   client.sendMessage(id, '[ESPERE UM POUCO...', MessageType.text)
                   client.sendMessage(id, buffer, MessageType.image)
               })
               .catch(err => {
                   console.log(err)
               })
           break
          case 'creator':
            client.sendContact(from, '6285722553839@c.us')
            break
      case 'tts':
            if (args.length === 1) return client.reply(from, 'Kirim perintah *!tts [id, en, jp, ar] [teks]*, contoh *!tts id halo semua*')
            const ttsId = require('node-gtts')('id')
            const ttsEn = require('node-gtts')('en')
	    const ttsJp = require('node-gtts')('ja')
            const ttsAr = require('node-gtts')('ar')
            const dataText = body.slice(8)
            if (dataText === '') return client.reply(from, 'Baka?', id)
            if (dataText.length > 500) return client.reply(from, 'Teks terlalu panjang!', id)
            var dataBhs = body.slice(5, 7)
	        if (dataBhs == 'id') {
                ttsId.save('./media/tts/resId.mp3', dataText, function () {
                    client.sendPtt(from, './media/tts/resId.mp3', id)
                })
            } else if (dataBhs == 'en') {
                ttsEn.save('./media/tts/resEn.mp3', dataText, function () {
                    client.sendPtt(from, './media/tts/resEn.mp3', id)
                })
            } else if (dataBhs == 'jp') {
                ttsJp.save('./media/tts/resJp.mp3', dataText, function () {
                    client.sendPtt(from, './media/tts/resJp.mp3', id)
                })
	    } else if (dataBhs == 'ar') {
                ttsAr.save('./media/tts/resAr.mp3', dataText, function () {
                    client.sendPtt(from, './media/tts/resAr.mp3', id)
                })
            } else {
                client.reply(from, 'Masukkan data bahasa : [id] untuk indonesia, [en] untuk inggris, [jp] untuk jepang, dan [ar] untuk arab', id)
            }
            break     
      case 'stickergif':
            if (isMedia) {
                if (mimetype === 'video/mp4' && message.duration < 10 || mimetype === 'image/gif' && message.duration < 10) {
                    const mediaData = await decryptMedia(message, uaOverride)
                    client.reply(from, '[WAIT] Sedang di proses⏄1�71ￄ1�77 silahkan tunggu ± 1 min!', id)
                    const filename = `./media/aswu.${mimetype.split('/')[1]}`
                    await fs.writeFileSync(filename, mediaData)
                    await exec(`gify ${filename} ./media/output.gif --fps=30 --scale=240:240`, async function (error, stdout, stderr) {
                        const gif = await fs.readFileSync('./media/output.gif', { encoding: "base64" })
                        await client.sendImageAsSticker(from, `data:image/gif;base64,${gif.toString('base64')}`)
                    })
                } else (
                    client.reply(from, '[❗] Kirim video dengan caption *!stickerGif* max 10 sec!', id)
                )
            }
            break     
     case 'sticker':
            if (isMedia && type === 'image') {
                const mediaData = await decryptMedia(message, uaOverride)
                const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                await client.sendImageAsSticker(from, imageBase64)
            } else if (quotedMsg && quotedMsg.type == 'image') {
                const mediaData = await decryptMedia(quotedMsg, uaOverride)
                const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                await client.sendImageAsSticker(from, imageBase64)
            } else if (args.length === 2) {
                const url = args[1]
                if (url.match(isUrl)) {
                    await client.sendStickerfromUrl(from, url, { method: 'get' })
                        .catch(err => console.log('Caught exception: ', err))
                } else {
                    client.reply(from, mess.error.Iv, id)
                }
            } else {
                    client.reply(from, mess.error.St, id)
            }
            break       
       default:
           break
   }
})
