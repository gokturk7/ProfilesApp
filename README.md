# Profiles Directory App

## Öğrenci Bilgileri
- Ad Soyad: Ömer Göktürk
- Öğrenci Numarası: 220404905

## Proje Açıklaması
Bu proje, React Native (Expo) kullanılarak geliştirilmiş bir profil dizini uygulamasıdır.
Uygulama, yerel olarak çalışan bir Express.js API sunucusundan profil verilerini çekmektedir.
Profil listesi sayfalıdır ve her profil için detay ekranı bulunmaktadır.

## Kurulum Talimatları

1.Sunucu Kurulumu
Sunucu dosyalarını bilgisayarınıza çıkarın ve terminalde:

cd ProfilesServer
npm install
node server.js
Sunucu şu adreste çalışır: http://<BILGISAYAR_IP>:3000 

2.Mobil Uygulama Kurulumu
cd ProfilesApp
npm install
npx expo start
Telefonunuzda Expo Go uygulaması ile QR kodu okutun.

3.IP Yapılandırması
Mobil cihazın API’ye erişebilmesi için bilgisayarın yerel IP adresi kullanılmalıdır.
.env dosyası örneği: EXPO_PUBLIC_API_BASE_URL=http://192.168.1.XXX:3000

