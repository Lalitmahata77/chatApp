const GenderCheckbox = ({onCheckbocChange, selectGender}) => {
	return (
		<div className='flex'>
			<div className='form-control'>			
			<label className={`label gap-2 cursor-pointer ${selectGender === "male" ? "selected" : ""}`}>
					<span className='label-text text-cyan-300'>Male</span>
				<input type='checkbox' className='checkbox  border-teal-200'
				checked={selectGender === "male"}
				onChange={()=>onCheckbocChange("male")}
				/> 				
                </label>
		</div> 			
        <div className='form-control '>
			<label className={`label gap-2 cursor-pointer  ${selectGender === "female" ? "selected" : ""}`}> 
								<span className='label-text text-cyan-300'>Female</span>
					<input type='checkbox' className='checkbox text-cyan-300 border-teal-200' 
					checked = {selectGender === "female"}
					onChange={()=>onCheckbocChange("female")}
					/>
			</label>
		</div> 		</div>
	)};
export default GenderCheckbox;