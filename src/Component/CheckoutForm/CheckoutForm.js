import { useState } from 'react'
import './CheckoutForm.css'



const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            name, phone, email
        }

        onConfirm(userData)
    }
    return (
        <div className='ContainerFormCheckout'>
            <form onSubmit={handleConfirm} className='FormCheckout'>
                <label className='Label'>
                    Nombre
                    <input className='Input'
                        type='text' placeholder='María Beatriz'
                        value={name}
                        onChange={({ target }) => setName(target.value)}
                    />
                </label>
                <label className='Label'>
                    Telefono
                    <input className='Input'
                        type='text' placeholder='11 5555-5555'
                        value={phone}
                        onChange={({ target }) => setPhone(target.value)}
                    />
                </label>
                <label className='Label'>
                    Email
                    <input className='InputEmail'
                        type="email" name="email" required placeholder='maria@xxxxx'
                        value={email}
                        onChange={({ target }) => setEmail(target.value)}
                    />
                </label>
                <div className='Label'>
                    <button type='submit' className='btn btn-danger buttonCrearOrden'>Crear Orden</button>
                </div>
            </form>

            <div className='Carrusel'>
                <div id="carouselExample" class="carousel slide">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="./asset/ImgBienestar/1001.jpg" class="d-block w-100 img-fluid" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="./asset/ImgCorporal/41.jpg" class="d-block w-100 img-fluid" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="./asset/ImgFacial/16.jpg" class="d-block w-100 img-fluid" alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

        </div>

    )

}

export default CheckoutForm