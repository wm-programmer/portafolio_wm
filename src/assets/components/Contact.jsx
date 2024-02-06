import "../styles/Contact.css"


export const Contact = () => {
    return(
        <div class="horizontal-padding vertical-padding" id="contact" >
        <section class="contact" id="contact">
            <h2 class="contact-title">Contacto</h2>
            <div class="contact-details">
                <div class="contact-details-group">
                    <p class="contact-label">Dirección</p>
                    <p class="contact-text">Quito, Ecuador</p>
                </div>

                <div class="contact-details-group">
                    <p class="contact-label">Email</p>
                    <p class="contact-text">wpmuzo@hotmail.com</p>
                </div>

                <div class="contact-details-group">
                    <p class="contact-text">Deje su mensaje y con gusto le respondere.</p>
                </div>
            </div>
            <form class="contact-form">
                <div class="contact-form-group">
                    <label for="name">Nombre</label>
                    <input required type="text" name="name" id="name"/>
                </div>

                <div class="contact-form-group">
                    <label for="email">Email</label>
                    <input required type="email" name="email" id="email"/>
                </div>

                <div class="contact-form-group">
                    <label for="message">Mensaje</label>
                    <textarea required name="message" id="message" rows="6"></textarea>
                   
                </div>

                <button type="submit" class="contact-form-submit">Enviar</button>
            </form>
        </section>

    </div>
    )
}