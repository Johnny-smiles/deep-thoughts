import React from 'react';
// importing react hooks
import { useParams } from 'react-router-dom';
// importing query 
import { useQuery } from '@apollo/react-hooks';
import { QUERY_THOUGHT } from '../utils/queries';

// importing reaction list
import ReactionList from '../components/ReactionList';

const SingleThought = props => {
    // applying hooks to parse thought id
    const { id: thoughtId } = useParams();
    // loading screen
    const { loading, data } = useQuery(QUERY_THOUGHT, {
      variables: { id: thoughtId }
    });

    // once loaded, if data is available, then display
    const thougth = data?.thought || {};

    if (loading){
      return <div>Loading...</div>;
    }

    consle.log(thoughtId);

  return (
        <div>
          <div className="card mb-3">
            <p className="card-header">
              <span style={{ fontWeight: 700 }} className="text-light">
                {thought.username}
              </span>{' '}
              thought on {thought.createdAt}
            </p>
            <div className="card-body">
              <p>{thought.thoughtText}</p>
            </div>
          </div>

          {thought.reactionCount > 0 && <ReactionList reactions={thought.reactions} />}
        </div>
  );
};

export default SingleThought;
