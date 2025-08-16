export interface Surah {
  nomor: number;
  nama: string;
  namaLatin: string;
  jumlahAyat: number;
  tempatTurun: TempatTurun;
  arti: string;
  deskripsi: string;
  audioFull: { [key: string]: string };
}
export enum TempatTurun {
  Madinah = "Madinah",
  Mekah = "Mekah",
}

export interface Ayat {
    nomorAyat: number;
    teksArab: string;
    teksLatin: string;
    teksIndonesia: string;
    audio: {
        '01': string;
        '02': string;
        '03': string;
        '04': string;
        '05': string;
    };
}

export interface SurahDetail {
    nomor: number;
    nama: string;
    namaLatin: string;
    arti: string;
    jumlahAyat: number;
    tempatTurun: string;
    audioFull: {
        '01': string;
        '02': string;
        '03': string;
        '04': string;
        '05': string;
    };
    ayat: Ayat[];
}

export interface BookmarkAyat{
    nomorSurah: string,
    ayat: number
}