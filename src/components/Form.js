import React, { useState } from "react";
import QR from "../download.png";
import { FaShoppingBasket } from "react-icons/fa";
import { useMutation } from "@apollo/react-hooks";
import { CREATE_ITEM_MUTATION, FETCH_ITEMS_QUERRY } from "../util/graphql";

function Form() {
	const [qr, setQr] = useState(false);
	const [itemName, setItemName] = useState("");
	const [createItem] = useMutation(CREATE_ITEM_MUTATION, {
		refetchQueries: [{ query: FETCH_ITEMS_QUERRY }],
	});

	const handleChange = (e) => {
		let name = e.target.value;
		setItemName(name);
	};

	const handleCreate = (e) => {
		e.preventDefault();
		createItem({ variables: { name: itemName } });
		setItemName("");
	};

	return (
		<div id="form-wrapper">
			<div>
				{qr ? (
					<img
						src={QR}
						alt="QR"
						onClick={() => setQr(!qr)}
						className="btn btn-sm btn-outline-info"
					/>
				) : (
					<button
						className="btn btn-sm btn-outline-info"
						onClick={() => setQr(!qr)}
					>
						QR?
					</button>
				)}
			</div>
			<form id="form">
				<h2>
					&nbsp;&nbsp;&nbsp; Shopping List &nbsp;
					<FaShoppingBasket /> &nbsp;
				</h2>
				<div className="flex-wrapper">
					<div style={{ flex: 6 }}>
						<input
							type="text"
							id="itemName"
							className="form-control"
							name="itemName"
							onChange={handleChange}
							value={itemName}
							placeholder="Add an item"
						/>
					</div>
					<div style={{ flex: 1 }}>
						<button
							id="submit"
							className="btn btn-warning"
							type="submit"
							name="Add"
							onClick={handleCreate}
						>
							Add
						</button>
					</div>
				</div>
			</form>
		</div>
	);
}

export default Form;
