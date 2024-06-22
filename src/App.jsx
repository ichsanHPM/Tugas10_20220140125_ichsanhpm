import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="content">
        <h1 >Majalengka</h1>
        <img src="https://anekatempatwisata.com/wp-content/uploads/2018/02/Panyaweuyan-Argapura.jpg" alt="" />
        <p>Majalengka adalah sebuah kabupaten yang terletak di Provinsi Jawa Barat, Indonesia. Kabupaten ini dikenal dengan julukan "Kota Angin" karena angin kencang yang sering berhembus di daerah ini. Majalengka menawarkan pesona alam yang memukau dengan pemandangan pegunungan, air terjun, dan persawahan yang hijau.</p>

        <p>Salah satu daya tarik utama di Majalengka adalah Terasering Panyaweuyan di Argapura, yang menawarkan pemandangan hamparan sawah berundak yang indah dan menakjubkan, terutama saat musim tanam padi. Selain itu, Majalengka memiliki beberapa air terjun yang terkenal, seperti Curug Cipeuteuy dan Curug Muara Jaya, yang menjadi destinasi favorit bagi pecinta alam dan wisatawan.</p>

        <p>Majalengka juga memiliki Bandara Internasional Kertajati, yang merupakan salah satu bandara terbesar di Indonesia, membuka akses yang lebih luas bagi wisatawan dan meningkatkan potensi ekonomi daerah ini.</p>

        <p>Selain keindahan alamnya, Majalengka juga kaya akan budaya dan tradisi lokal. Masyarakatnya masih memelihara berbagai kesenian tradisional, seperti tari jaipong dan musik gamelan, serta berbagai upacara adat yang unik.</p>

        <p>Dengan kombinasi antara keindahan alam, kekayaan budaya, dan aksesibilitas yang baik, Majalengka menjadi destinasi yang menarik untuk dikunjungi bagi mereka yang ingin menikmati keindahan alam Jawa Barat dan merasakan kehidupan masyarakat lokal yang ramah dan bersahaja.</p>

      </div>

    </>
  )
}

export default App
