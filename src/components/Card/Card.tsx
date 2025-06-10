import { Card } from "../StyledComponents/Card/Card";

export function CardComponent() {
    return (
        <>
            <Card>
                <div className="card total-characters-card">
                    <span className="card-count">00</span>
                    <p>Total Characters</p>
                </div>
            </Card>
            <Card>
                <div className="card word-characters-card">
                    <span className="card-count">00</span>
                    <p>Word Count</p>
                </div>
            </Card>
            <Card>
                <div className="card sentence-characters-card">
                    <span className="card-count">00</span>
                    <p>Sentence Count</p>
                </div>
            </Card>

        </>
    )
}