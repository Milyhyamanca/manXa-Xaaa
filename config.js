import { fileURLToPath } from "url"
import fs from "fs"

// limit
const limit = {
   free: 25,
   premium: 250,
   VIP: "Infinity",
   download: {
      free: 30000000, // use byte
      premium: 100000000, // use byte
      VIP: 1130000000, // use byte 
   }
}


export default {
   limit,
   APIs: {
      xzn: {
         URI: 'https://xzn.wtf',
         Key: "i dont know"
      }
   },

   msg: {
      owner: 'Wkwkwkwk maaf yaa, tapi perintah ini cuma buat owner!',
      group: 'Ini perintah khusus group loh rekk🤭!',
      private: 'Perintah khusus chet priv loh ini rek, yakin disini? malu ahh😊!',
      admin: 'Loh!!? gak bisa ya? bukan admin sih yang ngasih perintahnya🤭!',
      botAdmin: 'Yahh😢, harus jadi admin dulu nih',
      bot: 'Fitur ini hanya dapat diakses oleh Bot',
      locked: 'Fitur ini telah dinonaktifkan!',
      media: 'replay media...',
      error: "Sepertinya ada kesalahan. bot gagal dalam mengeksekusi...",
      quoted: "Reply message...",
      wait: "tunggu bentar lek",
      premium: "Upgrade ke premium dulu gih baru pake🤭!",
      vip: "Elu tuh bukan VIP makanya gak bisa🤭!",
      dlFree: `File over ${formatSize(limit.download.free)} can only be accessed by premium users`,
      dlPremium: `WhatsApp Web cannot send files larger than ${formatSize(limit.download.premium)}`,
      dlVIP: `WhatsApp cannot send files larger than ${formatSize(limit.download.VIP)}`
   },

   options: {
      public: true,
      URI: "database.json", // use mongo or file json
      owner: ["6285822907663", "6285821923108"],
      pathCommand: 'commands'
   },

   Exif: {
      packId: "https://instagram.com/cak_haho",
      packName: `Dibuat Oleh :`,
      packPublish: "manXa-Xaa.",
      packEmail: "manca9500@yahoo.com",
      packWebsite: "https://instgaram.com/cak_haho",
      androidApp: "https://play.google.com/store/apps/details?id=com.bitsmedia.android.muslimpro",
      iOSApp: "https://apps.apple.com/id/app/muslim-pro-al-quran-adzan/id388389451?|=id",
      categories: ['😹', '😎', '😱'],
      isAvatar: 0
   },

   session: {
      Path: "session",
      Name: "hisoka"
   }
}

function formatSize(bytes) {
   if (bytes >= 1000000024) { bytes = (bytes / 1000000024).toFixed(2) + " GB"; }
   else if (bytes >= 1000024) { bytes = (bytes / 1000024).toFixed(2) + " MB"; }
   else if (bytes >= 1024) { bytes = (bytes / 1024).toFixed(2) + " KB"; }
   else if (bytes > 1) { bytes = bytes + " bytes"; }
   else if (bytes == 1) { bytes = bytes + " byte"; }
   else { bytes = "0 bytes"; }
   return bytes;
}

let fileP = fileURLToPath(import.meta.url)
fs.watchFile(fileP, () => {
    fs.unwatchFile(fileP)
    console.log(`Update File "${fileP}"`)
    import(`${import.meta.url}?update=${Date.now()}`)
})
