import { Container, Row, Col, Button, Image,Card,CardGroup,} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import homeberanda1 from '../images/homeberanda1.png';
import homerencana1 from '../images/homerencana1.png'
import homerencana2 from '../images/homerencana2.png'
import homerencana3 from '../images/homerencana3.png'
import homenutrisi from '../images/homenutrisi.png'
import homegabung from '../images/homegabung.png'
import homejanda from '../images/homejandabolong.png';
import homebuttonwood from '../images/homebuttonwood.png';
import homepeony from '../images/homepeony.png';
import homesepatu from '../images/homebungasepatu.png';


const HomePage = () => {
  return (
    <>
   
      <div>
      <Container fluid className='mt-4 mb-4'>
        <Row className="justify-content-center align-items-center">

          <Col md lg={{ span: 6, offset: 1 }} className='d-flex align-items-center'>
            <Container className="mt-5">
              <h1>Mulailah untuk Merawat Tanaman Hiasmu</h1><br />
              <p style={{ textAlign: 'justify' }}>
                Selamat datang di Tanaman Hias, di mana setiap detik adalah perjalanan
                baru dalam merawat kehidupan hijau. Mari jelajahi, belajar, dan berbagi
                cinta terhadap tanaman hias. Inilah tempatnya, di mana setiap kuncup
                adalah awal dari petualangan yang tak terlupakan.
              </p><br />
              <Link to="/Informasi">
                <Button type="button" className="btn btn-secondary btn-custom" >Selengkapnya</Button>
              </Link>
            </Container>
          </Col>
          <Col md lg={{ span: 4, offset: 1 }} className='ml-md-5 mt-3 text-center' >
            <Image style={{ width: "90%", height: "90%" }}
              src={homeberanda1}
              alt="Login Image"
              className="img-fluid mt-3"
            />
          </Col>
        </Row>
      </Container>
      </div>

      <div>
      <Container className='mt-5 mb-5'>
        <Row className="justify-content-center pt-5">
          <Col className='mt-4 pt-4 text-center'>
            <h2>Memulai Rencana Anda dengan benar</h2>
            <h4>Ikuti Instruksi untuk lebih lanjut</h4>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col sm={4} className='isi1 mt-4 pt-4 d-flex flex-column align-items-center'>
            <img src={homerencana1} alt="rencana1" className="mb-4" />
            <h5 className="text-center">Penyiraman yang Tepat</h5>
            <p style={{ textAlign: 'justify' }}>
              Tentukan jadwal penyiraman berdasarkan jenis tanaman, kondisi iklim,
              dan musim. Pastikan tanah tidak terlalu kering atau terlalu basah.
            </p>
          </Col>

          <Col sm={4} className='isi2 mt-4 pt-4 d-flex flex-column align-items-center'>
            <img src={homerencana2} alt="rencana2" className="mb-4" />
            <h5 className="text-center">Pemupukan Rutin</h5>
            <p style={{ textAlign: 'justify' }}>
              Berikan tanaman nutrisi yang diperlukan dengan memilih pupuk
              yang sesuai dengan jenis tanaman dan fase pertumbuhannya.
            </p>
          </Col>

          <Col sm={4} className='isi3 mt-4 pt-4 d-flex flex-column align-items-center'>
            <img src={homerencana3} alt="rencana3" className="mb-4" />
            <h5 className="text-center">Perhatikan Pencahayaan</h5>
            <p style={{ textAlign: 'justify' }}>
              Beberapa tanaman membutuhkan sinar matahari langsung, dan ada yang
              di tempat teduh. Pahami preferensi pencahayaan tanaman Anda.
            </p>
          </Col>
        </Row>
      </Container >
      </div>

      <Container fluid className='mt-6 pt-5 px-4 py-5 mb-6'>
        <Row className="justify-content-center align-items-center">

          <Col md lg={{ span: 4, offset: 1 }} className='ml-md-5 mt-3 text-center' >
            <Image src={homenutrisi} style={{ width: "80%", height: "80%" }}
              alt="gambar tunas" />
          </Col>

          <Col md lg={{ span: 5, offset: 1 }} className=' align-items-center pt-5'>
            <h2>Penuhi Nutrisi tanaman anda dengan baik</h2> <br />
              <ol type='1'>
                <li> Awasi tanaman Anda untuk tanda-tanda kekurangan nutrisi, seperti daun kuning atau pertumbuhan yang lambat.</li>
                <li>Sebelum memberikan nutrisi tambahan, lakukan analisis tanah untuk mengetahui tingkat keasaman (pH) dan kandungan nutrisinya.</li>
                <li>Pilih pupuk yang sesuai dengan jenis tanaman hias Anda. Pupuk umumnya mengandung tiga elemen utama: nitrogen (N), fosfor (P), dan kalium (K).</li>
                <li>Tentukan jadwal pemupukan yang konsisten sepanjang musim tumbuh. </li>
                <li>Pastikan tanaman menerima cukup air, karena nutrisi larut dalam air dan diserap oleh akar tanaman.</li>
              </ol>
          </Col>
        </Row>
      </Container>

      <Container fluid className='mt-5 pt-5 px-4 py-5 mb-5'>
        <Row className="justify-content-center align-items-center">

          <Col md lg={{ span: 5, offset: 1 }} className=' align-items-center'>
            <h2>Bergabung bersama kami untuk merawat tanaman anda</h2> <br />
            <ol type='1'>
              <li>Dapatkan informasi terbaru tentang tren tanaman hias, perawatan terbaru, dan inovasi di dunia Tanaman Hias.</li>
              <li>Saling berbagi pengalaman dan pengetahuan dengan anggota komunitas lainnya. Tanyakan pertanyaan dan dapatkan jawaban dari mereka yang memiliki pengalaman serupa.</li>
              <li>Dapat berkonsultasi dengan ahli dalam bidang tanaman hias untuk menanyakan masalah tanaman hias anda.</li>
            </ol>
          </Col>
          <Col md lg={{ span: 4, offset: 1 }} className=' mt-3 text-center px-2' >
            <Image src={homegabung} style={{ width: "80%", height: "80%" }}
              alt="gambar kanan" />
          </Col>
        </Row>
      </Container>

      <Container className='mb-4'>
        <h2>Artikel</h2>
      </Container>

      <CardGroup className="mx-5 px-4 mb-4 pb-4">
      <Card className="mb-3 mx-4">
        <Card.Img src={homejanda}  />
        <Card.Body>
          <h3><Card.Title>Janda Bolong (Monstera)</Card.Title></h3>
         <Card.Text>
          Tanaman kekinian Monstera atau dikenal sebagai nama tanaman janda bolong menjadi 
          tanaman hias unik yang berasal dari daerah tropis Amerika yang menjadikan banyak peminat di tahun ini.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="mb-3 mx-4">
        <Card.Img src={homebuttonwood} />
        <Card.Body>
         <h3><Card.Title>Pohon Buttonwood</Card.Title></h3> 
         <Card.Text>
          Buttonwood adalah pohon yang bercabang rendah, berbatang banyak, semak, 
          selalu hijau dengan tinggi rata-rata 35 kaki, dan sering dikaitkan dengan komunitas bakau.    
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="mb-3 mx-4">
        <Card.Img src={homepeony}/>
        <Card.Body>
          <h3><Card.Title>Bunga Peony</Card.Title></h3>
         <Card.Text>
          Bunga peony merupakan salah satu tanaman hias yang berasal dari Asia, Eropa, 
          dan Amerika Utara hingga Barat.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="mb-3 mx-4">
        <Card.Img src={homesepatu}/>
        <Card.Body>
          <h3><Card.Title>Bunga Sepatu</Card.Title></h3>
          <Card.Text>
          Bunga sepatu adalah tanaman yang kaya akan antioksidan. Antioksidan ini 
          sangatlah baik untuk tubuh kita dan membantu dalam menangkal radikal bebas yang bisa.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
       

    </>
  )
}

export default HomePage