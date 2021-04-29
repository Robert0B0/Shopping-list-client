import React, { useState } from "react";
import { FiEdit, FiTrash } from "react-icons/fi";
import { FaShoppingBasket } from "react-icons/fa";

export default function Item({ item, itemStrike, itemDelete, itemRename }) {
	const [renaming, setRenaming] = useState(false);
	const [itemName, setItemName] = useState("");

	const handleRename = (e, id) => {
		e.preventDefault();
		itemRename({ variables: { itemId: id, newName: itemName } });
		setItemName("");
		setRenaming(false);
	};

	const handleChange = (e) => {
		setItemName(e.target.value);
	};

	return (
		<div className="item-wrapper flex-wrapper">
			<div style={{ flex: 7 }}>
				{!renaming ? (
					<div onClick={() => itemStrike({ variables: { itemId: item.id } })}>
						{item.strike !== true ? (
							<span>{item.name}</span>
						) : (
							<div>
								<FaShoppingBasket /> <strike>{item.name}</strike>{" "}
							</div>
						)}
					</div>
				) : (
					<div>
						<form id="form">
							<input
								type="text"
								value={itemName}
								className="form-control"
								name="itemName"
								onChange={handleChange}
							/>
							<button
								id="submit"
								className="btn btn-success"
								type="submit"
								name="Rename"
								onClick={(e) => handleRename(e, item.id)}
							>
								Rename
							</button>
						</form>
					</div>
				)}
			</div>

			<div style={{ flex: 1 }}>
				<button
					onClick={() => {
						setRenaming(!renaming);
						setItemName(item.name);
					}}
					className="btn btn-sm btn-outline-info"
				>
					<FiEdit />
				</button>
			</div>
			<div style={{ flex: 1 }}>
				<button
					onClick={() => itemDelete({ variables: { itemId: item.id } })}
					className="btn btn-sm btn-outline-dark delete"
				>
					<FiTrash />
				</button>
			</div>
		</div>
	);
}
