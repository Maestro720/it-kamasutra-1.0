import React from 'react';
import f from './Friends.module.css'

const Friends = (props) => {
	return (
		<div className={f.block}>
		<a>Друзья</a>
			<div className={f.friendBlock}>
				<div className={f.friend}>
					<img src="https://i.pinimg.com/236x/5b/53/86/5b5386252d79fee53a3e62c0276b1b08.jpg" />
					<span>Олег</span>
				</div>
				<div className={f.friend}>
					<img src="https://sun9-39.userapi.com/impg/fWq7NB3M9nNOU2tSdAhCM0-xWJS2Dy1AcgTJ9w/62ZCEccrOIk.jpg?size=1073x1080&quality=96&sign=6e4a2f1a187773a30fb0f2903e95d440&type=album" />
					<span>Яков</span>
				</div>
				<div className={f.friend}>
					<img src="https://f1.upet.com/A_r2u6uZhnxA_x.jpg" />
					<span>Андрей</span>
				</div>
			</div>
		</div>

	)
}

export default Friends;