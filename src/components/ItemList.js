import React from "react";
import Item from "./Item";
import { useMutation } from "@apollo/react-hooks";
import {
	FETCH_ITEMS_QUERRY,
	STRIKE_ITEM_MUTATION,
	RENAME_ITEM_MUTATION,
	DELETE_ITEM_MUTATION,
} from "../util/graphql";

function ItemList({ items }) {
	const [itemStrike] = useMutation(STRIKE_ITEM_MUTATION, {
		refetchQueries: [{ query: FETCH_ITEMS_QUERRY }],
	});
	const [itemDelete] = useMutation(DELETE_ITEM_MUTATION, {
		refetchQueries: [{ query: FETCH_ITEMS_QUERRY }],
	});

	const [itemRename] = useMutation(RENAME_ITEM_MUTATION, {
		refetchQueries: [{ query: FETCH_ITEMS_QUERRY }],
	});

	return (
		<div id="list-wrapper">
			{items.map((item) => {
				return (
					<div key={item.id}>
						<Item
							item={item}
							itemStrike={itemStrike}
							itemDelete={itemDelete}
							itemRename={itemRename}
						/>
					</div>
				);
			})}
		</div>
	);
}

export default ItemList;
