export default function Home() {
  return (
    <main dir="rtl" style={{ background: '#000', color: '#fff', fontFamily: 'sans-serif', textAlign: 'center', margin: 0 }}>
      
      {/* القسم الرئيسي */}
      <div style={{ padding: '60px 20px', background: '#111' }}>
        <h1 style={{ color: '#D4AF37', fontSize: '70px', margin: 0 }}>رداد</h1>
        <h2 style={{ fontSize: '30px' }}>RADAD</h2>
        <p style={{ color: '#D4AF37', fontSize: '26px', fontWeight: 'bold' }}>دكانك وبنكك</p>
        <p style={{ color: '#ccc', fontSize: '18px', lineHeight: '1.8' }}>كل شي تحتاجه في مكان واحد<br />تسوق من دكانك - وحول من بنكك</p>
        <a href="https://wa.me/967771081354" style={{ display: 'inline-block', background: '#25D366', color: '#fff', padding: '15px 30px', borderRadius: '30px', fontSize: '20px', fontWeight: 'bold', textDecoration: 'none', marginTop: '20px' }}>اطلب الآن واتساب</a>
      </div>

      {/* قسم دكانك */}
      <div style={{ padding: '40px 20px' }}>
        <h2 style={{ color: '#D4AF37', fontSize: '32px' }}>🛒 دكانك</h2>
        <p style={{ color: '#ccc' }}>كل احتياجات بيتك موجودة</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '15px', marginTop: '20px' }}>
          <div style={{ background: '#1a1a1a', padding: '20px', borderRadius: '15px', width: '140px' }}><div style={{ fontSize: '40px' }}>🍚</div><h3>مواد غذائية</h3><p style={{ color: '#D4AF37' }}>رز - سكر - زيت</p></div>
          <div style={{ background: '#1a1a1a', padding: '20px', borderRadius: '15px', width: '140px' }}><div style={{ fontSize: '40px' }}>🧃</div><h3>مشروبات</h3><p style={{ color: '#D4AF37' }}>عصائر - مياه - غازية</p></div>
          <div style={{ background: '#1a1a1a', padding: '20px', borderRadius: '15px', width: '140px' }}><div style={{ fontSize: '40px' }}>🧴</div><h3>منظفات</h3><p style={{ color: '#D4AF37' }}>صابون - شامبو - نظافة</p></div>
          <div style={{ background: '#1a1a1a', padding: '20px', borderRadius: '15px', width: '140px' }}><div style={{ fontSize: '40px' }}>🍫</div><h3>حلويات</h3><p style={{ color: '#D4AF37' }}>شوكولاتة - بسكويت</p></div>
        </div>
      </div>

      {/* قسم بنكك */}
      <div style={{ padding: '40px 20px', background: '#111' }}>
        <h2 style={{ color: '#D4AF37', fontSize: '32px' }}>🏦 بنكك</h2>
        <p style={{ color: '#ccc' }}>خدمات مالية سريعة وآمنة</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '15px', marginTop: '20px' }}>
          <div style={{ background: '#222', padding: '20px', borderRadius: '15px', width: '140px' }}><div style={{ fontSize: '40px' }}>💸</div><h3>حوالات</h3><p style={{ color: '#ccc' }}>ارسال واستلام</p></div>
          <div style={{ background: '#222', padding: '20px', borderRadius: '15px', width: '140px' }}><div style={{ fontSize: '40px' }}>📱</div><h3>شحن رصيد</h3><p style={{ color: '#ccc' }}>كل الشبكات</p></div>
          <div style={{ background: '#222', padding: '20px', borderRadius: '15px', width: '140px' }}><div style={{ fontSize: '40px' }}>💡</div><h3>سداد فواتير</h3><p style={{ color: '#ccc' }}>كهرباء - ماء - نت</p></div>
          <div style={{ background: '#222', padding: '20px', borderRadius: '15px', width: '140px' }}><div style={{ fontSize: '40px' }}>💰</div><h3>صرافة</h3><p style={{ color: '#ccc' }}>بيع وشراء عملات</p></div>
        </div>
      </div>

      {/* لماذا نحن */}
      <div style={{ padding: '40px 20px' }}>
        <h2 style={{ color: '#D4AF37', fontSize: '30px' }}>لماذا رداد؟</h2>
        <p style={{ fontSize: '18px', lineHeight: '2' }}>✅ توصيل سريع<br />✅ أسعار مناسبة<br />✅ ثقة وأمان<br />✅ خدمة 24 ساعة</p>
      </div>

      {/* تواصل */}
      <div style={{ padding: '40px 20px', background: '#D4AF37', color: '#000' }}>
        <h2 style={{ fontSize: '28px' }}>تواصل معنا</h2>
        <p style={{ fontSize: '18px' }}>صنعاء - اليمن</p>
        <a href="https://wa.me/967771081354 style={{ display: 'inline-block', background: '#000', color: '#D4AF37', padding: '15px 30px', borderRadius: '30px', fontWeight: 'bold', textDecoration: 'none', marginTop: '10px' }}>واتساب - اطلب الآن</a>
        <p style={{ marginTop: '20px', fontSize: '14px' }}>© 2026 رداد - دكانك وبنكك</p>
      </div>

    </main>
  )
}