import React, { useState } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

type Props = {};

const RepositoriesList = (props: Props) => {
  const [term, setTerm] = useState("");
  // const dispatch = useDispatch();
  const { searchRepositories } = useActions();
  // # selector 함수에 타입을 주는 방법

  // useTypedSelector 훅을 만들어 사용한다.
  // useTypedSelector = TypedUseSelectorHook<ReturnType<typeof reducers>> = useSelector
  const { data, error, loading } = useTypedSelector((state) => state.repositories);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    // # bindActionCreators 로 코드 추상화하기

    // dispatch(actionCreators.searchRepositories(term));
    // 기존의 dispatch 함수에는 action creator를 전달했다.
    // 하지만 이는 코드가 지저분해지는 결과를 낳았고, 이를 더 간략화하기 위해 bindActionCreators 함수를 활용할 수 있다.
    searchRepositories(term);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>검색</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && data.map((packageName) => <div key={packageName}>{packageName}</div>)}
    </div>
  );
};

export default RepositoriesList;
