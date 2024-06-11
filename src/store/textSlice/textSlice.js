import { createSlice } from '@reduxjs/toolkit'

export const textSlice = createSlice({
  name: 'texts',
  initialState: {
    value: {
      title: `Güneş Gülü`,
      p1: {
        question: `Özellikleri`,
        content: `Drosera cinsi diğer bitkiler gibi yaprakları rosette düzenindedir. Yaprak sapı dar, tüylü ve 13 ila 50 cm arasında değişmektedir. Laminanın üst yüzeyi, yapışkan bir müsilaj salgılayan kırmızı salgı tüyleriyle kaplanmıştır.Tipik bir bitkinin çapı 3 ila 5 santimetredir. Beyaz veya pembe renkli, beş yapraklı çiçekler 10 ila 15 mm uzunluğundadır.Haziran ve Ağustos ayları arasında çiçeklenir. Kışın, soğuk koşullarda hayatta kalabilmek için hibernakulum pozisyonuna geçer. Hibernakulum, zemin seviyesinde sıkıca kıvrılmış yapraklardan oluşan tomurcuk pozisyonudur.`,
        hidden: true
      },
      p2: {
        question: `Etçillik`,
        content: `Bitki, yapraklarını kaplayan parlak müsilaj damlalarına gelen böceklerle beslenir. Bu etçil davranışı, genellikle besin açısından fakir olan veya besin mevcudiyetinin ciddi şekilde azaldığı ortamlarda hayatta kalmak için gelişmiştir. Bitki, salgı bezlerine yapışan böcekleri eritmek ve vücutlarındaki amonyak (protein) ve diğer besinleri ayrıştırmak için enzim salgılar. Amonyak, diğer bitkilerin topraktan emdiği azotun yerini alır ve yüksek azotlu bir ortamda yetişen bitkiler, yakalanan böceklerden gelen azota daha az ihtiyaç duyar. Eskiden böceklerin parlak kırmızı rengin yanına geldiği düşünülüyordu, ancak yapay tuzaklar ile yapılan çalışmalarda, rengin böceklerin ilgisini çekmediği tespit edildi.`,
        hidden: true
      },
      p3: {
        question: `Yayılımı`,
        content: `Kuzey Amerika'da, Kanada Bozkırları ve tundra bölgeleri, güney Alaska, Pasifik Kuzeybatısı ve güneyde Georgia ve Louisiana'ya kadar uzanan Apalaş Dağları ve Kanada'nın tüm bölgelerinde bulunur. Britanya Adaları, Fransa'nın çoğu, Benelüks ülkeleri, Almanya, Danimarka, İsviçre, Çekya, Polonya, Beyaz Rusya, Baltık ülkeleri, İsveç ve Finlandiya'nın yanı sıra İtalya'nın kuzey bölgeleri de dahil olmak üzere Avrupa'nın çoğunda bulunur. Portekiz, İspanya, Romanya , Bulgaristan'ın dağlık bölgeleri ve İzlanda, Norveç ve Grönland'ın güney bölgelerinde görülür. Avusturya ve Macaristan'da nadirdir ve kısmen Balkanlar'a dağılmıştır. Britanya'da Exmoor, Dartmoor, Sedgemoor, Lake District, Shropshire, Pennine Dağları ve İskoçya'da görülür. Genellikle bataklıklarda ve dağların kenarlarındaki oyuklarda bulunur. Shropshire'ın ilçe çiçeğidir. Asya'da, Sibirya ve Japonya'nın yanı sıra Türkiye'nin bazı kısımları, Kafkasya, Kamçatka Yarımadası ve Kore'nin güney kısımlarında bulunur. Ayrıca Yeni Gine'de görüldüğü rapor edilmiştir.`,
        hidden: true
      },
      p4: {
        question: `Tıbbi Özellikleri`,
        content: `D. H. Paper'a göre, Güneş gülünün bitki özü, hiperosid, kuersetin ve izokersetin flavonoidleri içermektedir. Bitki özündeki bileşenler bitkiye antienflamatuvar ve anti spazmodik özellikler sağlar. Bitki özündeki flavonoidlerin muskarinik reseptörleri etkileyerek düz kasları gevşettiği düşünülmektedir. D. rotundifolia'nın bitki özündeki ellagik asidin de anti anjiyogenez etkileri olduğu gösterilmiştir.`,
        hidden: true
      }
    }
  },
  reducers: {
    changeHidden1: (state) => {
      state.value.p1.hidden = !state.value.p1.hidden
    },
    changeHidden2: (state) => {
      state.value.p2.hidden = !state.value.p2.hidden
    },
    changeHidden3: (state) => {
      state.value.p3.hidden = !state.value.p3.hidden
    },
    changeHidden4: (state) => {
      state.value.p4.hidden = !state.value.p4.hidden
    },
  }
})

export const { changeHidden1, changeHidden2, changeHidden3, changeHidden4 } = textSlice.actions

export default textSlice.reducer
