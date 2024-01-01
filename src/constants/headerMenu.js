import BasvuruOlustur from "../pages/userPages/BasvuruOlustur";
import BasvuruSorgula from "../pages/userPages/BasvuruSorgula";
import AdminLogin from "../pages/adminPages/AdminLogin"
import AdminBasvuruListesi from '../pages/adminPages/AdminBasvuruListesi'

export const userMenu = {
    basvuruOlustur: {
        title: 'Başvuru Oluştur',
        path: '/',
        element: <BasvuruOlustur/>,
        icon: 'pencil',
    },
    basvuruSorgula: {
        title: 'Başvuru Sorgula',
        path: '/basvuru-sorgula',
        element: <BasvuruSorgula/>,
        icon: 'question',
    },
    admin: {
        title: 'Admin - Login',
        path: '/admin',
        element: <AdminLogin/>,
        icon: 'pencil',
    },
}

export const adminMenu = {
    basvuruListesi: {
        title: 'Başvuru Listesi',
        path: '/admin/basvuru-listesi',
        element: <AdminBasvuruListesi/>,
        icon: 'pencil',
    },
}