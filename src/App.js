import React from "react";
import "./App.css";
import Form from "./components/Form";
import ItemList from "./components/ItemList";
import { FiTrash } from "react-icons/fi";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { FETCH_ITEMS_QUERRY, CLEAR_LIST_MUTATION } from "./util/graphql";

function App() {
	const { loading, data: { getAllItems: items } = {} } = useQuery(
		FETCH_ITEMS_QUERRY
	);

	let striked = 0;
	if (items) {
		for (const obj of items) {
			if (obj.strike === true) striked++;
		}
	}

	const [clearList] = useMutation(CLEAR_LIST_MUTATION, {
		refetchQueries: [{ query: FETCH_ITEMS_QUERRY }],
	});

	return (
		<div className="container">
			<div id="item-container">
				<Form />
				<h3 style={{ textAlign: "center", paddingTop: "1rem" }}>
					Acquired Items:{" "}
					<b>
						{striked}/{items ? items.length : 0}
					</b>
				</h3>
				{loading ? <h2>Loading Items...</h2> : <ItemList items={items} />}
				<div className="item-wrapper" onClick={clearList}>
					<div>
						<h3 style={{ textAlign: "center" }}>
							Clear List
							<FiTrash />
						</h3>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
