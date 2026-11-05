export default function Home() {
  return (
    <main dir="rtl" style={{ background: '#000', color: '#fff', textAlign: 'center', padding: '60px 20px', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#D4AF37', fontSize: '70px', margin: 0 }}>رَدَاد</h1>
      <h2 style={{ fontSize: '30px' }}>RADAD</h2>
      <p style={{ color: '#D4AF37', fontSize: '20px' }}>مؤسسة رداد اليمنية للمال والأعمال</p>
      <p style={{ color: '#ccc', fontSize: '18px', lineHeight: '1.8' }}>
        مستقبل المال والأعمال في اليمن<br />
        تحويلات فورية • سداد فواتير • متجر إلكتروني
      </p>
      <div style={{ marginTop: '30px' }}>
        <a href="#services" style={{ background: '#D4AF37', color: '#000', padding: '15px 30px', borderRadius: '10px', fontWeight: 'bold', textDecoration: 'none' }}>ابدأ الآن</a>
      </div>
      <div id="services" style={{ marginTop: '50px', background: '#111', padding: '30px', borderRadius: '20px', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
        <h3 style={{ color: '#D4AF37' }}>خدماتنا</h3>
        <p>تحويلات فورية عبر الكريمي وجيب</p>
        <p>سداد الفواتير - كهرباء، ماء، انترنت</p>
        <p>متجر رداد</p>
        <p>خدمات مالية آمنة</p>
      </div>
      <p style={{ marginTop: '40px', color: '#888' }}>صنعاء - اليمن | info@radad.ye | www.radad.ye</p>
      <p style={{ color: '#555', fontSize: '13px' }}>© 2026 RADAD - جميع الحقوق محفوظة</p>
    </main>
  )
}