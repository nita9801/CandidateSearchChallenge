import type { Candidate } from '../interfaces/Candidate.interface.tsx'
import { IoAddCircle, IoRemoveCircle } from 'react-icons/io5'

type CandidateCardProps = {
    currentCandidate: Candidate;
    candidateDetermination: (candidateIsChoosen: boolean) => void;
};

const CandidateCard = ({ currentCandidate, candidateDetermination }: CandidateCardProps) => {
    return (
        <section>
            {currentCandidate?.login ? (
                <>
                    {currentCandidate?.avatar_url ? (
                        <img
                            src={currentCandidate.avatar_url}
                            alt={`Avatar of ${currentCandidate.login}`}
                            style={{ width: '300px', borderRadius: '30px 30px, 0 0' }}
                        />
                    ) : (
                        <img
                            src="https://via.placeholder.com/100"
                            alt={`Avatar of ${currentCandidate.login}`}
                            style={{ width: '300px', borderRadius: '30px 30px, 0 0' }}
                        />
                    )}

                    <section
                        style={{
                            backgroundColor: '#000',
                            width: '280px',
                            borderRadius: '0 0 30px 30px',
                            padding: '0 10px 10px',
                        }}
                    >
                        {currentCandidate?.html_url && currentCandidate?.login ? (
                            <a href={currentCandidate.html_url} target="_blank" rel="noreferrer">
                                <h2 
                                    style={{ padding: 0, margin: '-7px 0 0 0', color: 'white'}}
                                >
                                    {currentCandidate.name}
                                    <em>({currentCandidate.login})</em>
                                </h2>
                            </a>
                        ) : null}
                        {currentCandidate?.location ? (
                            <p>Location: {currentCandidate.location}</p>
                        ) : null}
                        {currentCandidate?.email ? (
                            <p>
                                Email: {''}
                                <a href={`mailto:${currentCandidate.email}`}> {currentCandidate.email}</a>
                            </p>
                        ) : null}
                        {currentCandidate?.company ? (
                            <p>Company: {currentCandidate.company}</p>
                        ) : null}
                        {currentCandidate?.bio ? <p>Bio: {currentCandidate.bio}</p>
                        : null}
                    </section>
                    <section
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '10px',
                        }}
                    >
                        <IoRemoveCircle
                            style={{
                                color: 'red',
                                fontSize: '80px',
                                cursor: 'pointer',
                            }}
                            onClick={ () => {candidateDetermination(false) }}
                            />

                        <IoAddCircle
                            onClick={() => {candidateDetermination(true)}}
                            style={{
                                color: 'green',
                                fontSize: '80px',
                                cursor: 'pointer',
                            }}
                        />
                    </section>
                </>
            ) : (
                <h2>Currently, there are no candidates being displayed.</h2>
            )}
        </section>
    );
};

export default CandidateCard;