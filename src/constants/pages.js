import BasvuruOlustur from "../pages/userPages/BasvuruOlustur";
import BasvuruBasarili from "../pages/userPages/BasvuruBasarili";
import BasvuruSorgula from "../pages/userPages/BasvuruSorgula";
import Basvuru from "../pages/userPages/Basvuru";
import AdminLogin from "../pages/adminPages/AdminLogin"
import AdminBasvuruListesi from '../pages/adminPages/AdminBasvuruListesi'
import AdminBasvuru from '../pages/adminPages/AdminBasvuru'

export const userPages = {
    basvuruOlustur: {
        title: 'Başvuru Oluştur',
        path: '/',
        element: <BasvuruOlustur/>,
        icon: 'pencil',
    },
    basvuruBasarili: {
        title: 'Başvuru Başarılı',
        path: '/basvuru-basarili',
        element: <BasvuruBasarili/>,
        icon: 'smile-face',
    },
    basvuruSorgula: {
        title: 'Başvuru Sorgula',
        path: '/basvuru-sorgula',
        element: <BasvuruSorgula/>,
        icon: 'question',
    },
    basvuru: {
        title: 'Başvuru',
        path: '/basvuru/:basvuruNo',
        element: <Basvuru/>,
        icon: 'paper',
    },
    admin: {
        title: 'Login',
        path: '/admin',
        element: <AdminLogin/>,
        icon: 'pencil',
    },
}

export const adminPages = {
    basvuruListesi: {
        title: 'Başvuru Listesi',
        path: '/admin/basvuru-listesi',
        element: <AdminBasvuruListesi/>,
        icon: 'pencil',
    },
    basvuru: {
        title: 'Başvuru',
        path: '/admin/basvuru/:basvuruNo',
        element: <AdminBasvuru/>,
        icon: 'pencil',
    },
}