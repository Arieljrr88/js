function MisionCard({descripcion, simbolo}) {
    return(
        <section className="mision-card">
            <h2>{simbolo}</h2>
            <p>{descripcion}</p>
        </section>
    );
}

export default MisionCard;