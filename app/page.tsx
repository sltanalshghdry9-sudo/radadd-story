export default function Home() {
  return (
    <main dir="rtl" style={{ background: '#000', color: '#fff', textAlign: 'center', padding: '60px 20px', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#D4AF37', fontSize: '70px', margin: 0 }}>رَدَاد</h1>
      <h2 style={{ fontSize: '30px' }}>RADAD</h2>
      <p style={{ color: '#D4AF37', fontSize: '26px', fontWeight: 'bold', marginTop: '10px' }}>دكانك وبنكك</p>
      <p style={{ color: '#ccc', fontSize: '18px', lineHeight: '1.8' }}>
        كل شي تحتاجه في مكان واحد<br />
        تسوق من دكانك - وحول من بنكك
      </p>

      <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '40px' }}>
        <div style={{ background: '#111', border: '1px solid #D4AF37', borderRadius: '20px', padding: '25px', width: '300px' }}>
          <div style={{ fontSize: '40px' }}>🛒</div>
          <h3 style={{ color: '#D4AF37' }}>دكانك</h3>
          <p style={{ color: '#ccc', lineHeight: '1.7' }}>تسوق من أفضل التجار اليمنيين<br />جوالات، ملابس، مواد غذائية<br />توصيل لبيتك - ادفع عبر رداد</p>
          <button style={{ background: '#D4AF37', color: '#000', padding: '12px 25px', borderRadius: '10px', border: 'none', fontWeight: 'bold', width: '100%' }}>ادخل دكانك</button>
        </div>

        <div style={{ background: '#111', border: '1px solid #D4AF37', borderRadius: '20px', padding: '25px', width: '300px' }}>
          <div style={{ fontSize: '40px' }}>🏦</div>
          <h3 style={{ color: '#D4AF37' }}>بنكك</h3>
          <p style={{ color: '#ccc', lineHeight: '1.7' }}>حول لأي واحد في ثواني<br />ادفع فواتيرك - كهرباء، ماء، نت<br />رصيدك آمن ومحمي 100%</p>
          <button style={{ background: '#fff', color: '#000', padding: '12px 25px', borderRadius: '10px', border: 'none', fontWeight: 'bold', width: '100%' }}>ادخل بنكك</button>
        </div>
      </div>

      <div style={{ marginTop: '40px', background: '#111', padding: '25px', borderRadius: '20px', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
        <h3 style={{ color: '#D4AF37' }}>ليش رداد؟</h3>
        <p>✅ دكانك وبنكك في تطبيق واحد</p>
        <p>✅ بدون ما تخرج من البيت</p>
        <p>✅ عبر الكريمي وجيب</p>
        <p>✅ آمن وسريع وبالريال اليمني</p>
      </div>

      <p style={{ marginTop: '40px', color: '#888' }}>صنعاء - اليمن | info@radad.ye | www.radad.ye</p>
      <p style={{ color: '#D4AF37', fontWeight: 'bold' }}>رَدَاد - دكانك وبنكك</p>
    </main>
  )
}