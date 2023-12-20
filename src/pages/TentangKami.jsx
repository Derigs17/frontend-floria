import { Container, Row, Col, Image, Button } from 'react-bootstrap';



import tentangkami from '../images/tentangkami.png';
import tentangkami1 from '../images/tentangkami1.png';
import layanan1 from '../images/layanan1.png';
import layanan2 from '../images/layanan2.png';
import layanan3 from '../images/layanan3.png';
import hape from '../images/hape.png';
import gplay from '../images/gplay.png'


const TentangKami = () => {
    return (
        <>

            <Row>
                <Col >
                    <Image style={{
                        display: 'flex',
                        alignItems: 'center',
                        width: '100%',
                        height: '100%'
                    }}
                        src={tentangkami}
                        className="img-fluid"
                        alt="header image"
                    />
                </Col>
            </Row>

            <Container fluid className='mt-4 pt-4'>
                <Row className="justify-content-center align-items-center">
                    <Col md={6} className='text-center'>
                        <img
                            src={tentangkami1}
                            alt="Login Image"
                            className="img-fluid"
                        />
                    </Col>
                    <Col md={6} className='d-flex align-items-center'>
                        <Container className="m-5">
                            <h2>Tentang Kami</h2>
                            <p style={{ textAlign: 'justify' }}>
                                Selamat datang di platform kami! Kami adalah sebuah aplikasi
                                mobile dan situs web yang didedikasikan untuk menyediakan sumber
                                daya informatif seputar tanaman hias. Dengan fokus pada
                                mempermudah masyarakat dalam menanam dan merawat tanaman hias,
                                kami menghadirkan berbagai fitur yang dirancang untuk memenuhi
                                kebutuhan para penggemar tanaman hias.
                            </p>
                        </Container>
                    </Col>
                </Row>
            </Container>


            <Container>
                <Row className="justify-content-center"> 
                    <Col className='mt-4 pt-4 text-center'> 
                        <h3>Layanan Yang Anda Dapatkan</h3>
                        <h4>Ikuti Instruksi untuk lebih lanjut</h4>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col sm={4} className='isi1 mt-4 pt-4 d-flex flex-column align-items-center'>
                        <img src={layanan1} alt="Layanan 1" className="mb-4" /> 
                        <p style={{ textAlign: 'justify' }}>Platform kami menyajikan berbagai informasi berguna melalui artikel,
                            tips, video tutorial, dan panduan praktis dalam format yang mudah dipahami.
                        </p>
                    </Col>
                    <Col sm className='isi2 mt-4 pt-4 d-flex flex-column align-items-center'>
                        <img src={layanan2} alt='layanan2' className="mb-4" />
                        <p style={{ textAlign: 'justify' }}>Nikmati pengalaman berbagi dan belajar dari sesama pecinta tanaman hias
                            melalui fitur Konsultasi Anda dapat berpartisipasi dalam diskusi, dengan para pakar.
                        </p>

                    </Col>
                    <Col sm className='isi3 mt-4 pt-4 d-flex flex-column align-items-center'>
                        <img src={layanan3} alt='layanan2' className="mb-4" />
                        <p style={{ textAlign: 'justify' }}>Kami memahami bahwa setiap tanaman hias memiliki kebutuhan dan tantangan unik.
                            Oleh karena itu, kami menyediakan layanan untuk merawat tanaman hias.
                        </p>
                    </Col>
                </Row>
            </Container >

            <Container fluid className='mt-4 pt-4'>
                <Row className="justify-content-center align-items-center">
                    <Col md lg={{ span: 5, offsite: 1 }} className='d-flex align-items-center '>
                        <Container >
                            <h3>Dapatkan Versi Aplikasi</h3>
                            <p style={{ textAlign: 'justify' }}>
                                Optimalkan pengalaman pengguna Anda dengan mendapatkan versi aplikasi kami sekarang!
                                Dengan aplikasi kami, nikmati akses cepat, fitur eksklusif, dan pengalaman yang dioptimalkan,
                                memberikan Anda kontrol penuh atas perjalanan digital dilengkapi dengan fitur pengingat untuk
                                mengoptimalkan kebutuhan anda. unduh aplikasi kami sekarang!
                            </p>
                            <Button variant="dark" size='lg'>
                                <img src={gplay} alt="" />

                            </Button>
                        </Container>
                    </Col>
                    <Col md lg={{ span: 2, offsite: 1 }} >
                        <img
                            src={hape}
                            alt="Login Image"
                            className="img-fluid"
                        />
                    </Col>
                </Row>
            </Container>



        </>
    )
}

export default TentangKami