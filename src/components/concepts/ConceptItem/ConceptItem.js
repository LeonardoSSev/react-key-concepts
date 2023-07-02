import './ConceptItem.css'

export default function ConceptItem({ concept }) {
    return (
        <li className="concept-item">
            <img src={concept.image} alt={concept.title} />
            <h2>{concept.title}</h2>
            <p>{concept.description}</p>
        </li>
    );
}
