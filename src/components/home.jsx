import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { FcMusic } from 'react-icons/fc';

function Home() {
  return (
    <>
        <Container>
            <Row>
                <Col>
                    <div>
                      <div>
                        <FcMusic color='white' style={{position: 'relative',
                              left: '20%',
                            }}
                            size="50px"/>
                            <FcMusic color='white' style={{position: 'relative',
                            left: '20%',
                          }}
                          size="20px"/>
                      </div>
                      <h1 className='brand my-5'>What is the <b>muse</b> for your listening?</h1>
                      <h6><b>Discover</b> new music</h6>
                      <h6><b>Curate</b> the perfect playlist with <b>MusicMuse</b></h6>
                    </div>
                    <div className='my-5'>
                    <Button variant='outline-warning' className='me-2'>Explore</Button>
                    <Button variant='success'>Get Started</Button>
                    </div>
                    <div>
                        <FcMusic color='white' style={{position: 'relative',
                              right: '20%',
                            }}
                            size="50px"/>
                            <FcMusic color='white' style={{position: 'relative',
                            right: '20%',
                          }}
                          size="20px"/>
                      </div>
                    
                </Col>
                <Col>
                          <div>
                            <img src="../assets/download.png" alt=''/>
                          </div>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Home