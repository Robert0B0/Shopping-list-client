import gql from "graphql-tag";

export const FETCH_ITEMS_QUERRY = gql`
	{
		getAllItems {
			id
			name
			createdAt
			strike
		}
	}
`;

export const CREATE_ITEM_MUTATION = gql`
	mutation($name: String!) {
		createItem(name: $name) {
			id
			name
			strike
			createdAt
		}
	}
`;

export const RENAME_ITEM_MUTATION = gql`
	mutation($itemId: ID!, $newName: String!) {
		renameItem(itemId: $itemId, newName: $newName) {
			id
			name
			strike
			createdAt
		}
	}
`;

export const DELETE_ITEM_MUTATION = gql`
	mutation($itemId: ID!) {
		deleteItem(itemId: $itemId)
	}
`;

export const CLEAR_LIST_MUTATION = gql`
	mutation {
		deleteAllItems
	}
`;

export const STRIKE_ITEM_MUTATION = gql`
	mutation strikeItem($itemId: ID!) {
		strikeItem(itemId: $itemId) {
			id
			name
			strike
			createdAt
		}
	}
`;
