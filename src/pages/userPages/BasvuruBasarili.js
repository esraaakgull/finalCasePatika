const BasvuruBasarili = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    return user ? (
            <div className="basarili-container">
                <div>
                    <h1>Tebrikler <i className="kod">{user.ad} {user.soyad}!</i> Başvurun başarılı bir şekilde yapıldı.</h1>
                </div>
                <div>
                    <h2 className="basvuru-kod">Başvuru Kodun: <i className="kod">{user.basvuruNo}</i></h2>
                </div>
            </div>)
        :
        <div>
            <h1>404 (BULUNAMADI) </h1>
        </div>
}

export default BasvuruBasarili