---
file: icon.md
title: Icon
---

<script>
    import {Button,Hero, Icon, IconButton} from '$lib'

    let loading
</script>

# {title}

<Hero offset="my-2" size="sm">
	<h2>Buttons & Icons</h2>
	<Button
		variant="primary"
		{loading}
		on:click={(e) => toast.primary({ msg: 'top_left', pos: 'top_left' })}
	>
		<Icon icon="emoji" offset="mr-2" />Button
	</Button>
	<IconButton
		size="xxl"
		variant="success"
		iconSize="4x"
		{loading}
		on:click={(e) => (loading = !loading)}
	>
		<svg viewBox="0 0 900 900" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M326.716 149.024C305.401 154.746 156.321 198.737 152.629 200.287C150.248 201.36 147.152 203.386 145.842 204.817C143.818 206.963 73.326 331.663 66.0625 345.85C62.9666 351.93 62.8475 357.533 65.7053 362.541C69.0394 368.74 439.836 748.921 443.884 750.352C449.243 752.259 454.363 751.782 459.126 748.802C463.532 746.179 830.28 370.051 834.209 364.21C835.638 362.183 836.352 358.845 836.352 354.791C836.352 348.473 835.4 346.685 796.344 279.685C774.315 241.774 754.906 209.109 753.358 206.963C751.691 204.817 748.119 201.956 745.499 200.764C742.76 199.452 700.013 187.054 650.597 173.106L560.696 147.712L446.98 147.474C349.459 147.235 332.312 147.474 326.716 149.024ZM611.779 198.975C643.214 207.917 669.173 215.308 669.292 215.547C669.887 216.023 449.957 271.101 447.338 271.101C443.765 271.101 226.693 215.904 227.408 215.189C227.765 214.831 251.699 207.44 280.634 198.856L333.265 183.12L443.884 183L554.504 182.881L611.779 198.975ZM692.63 247.497C691.797 248.927 620.233 342.512 593.203 377.443L581.415 392.702L531.999 345.969L482.703 299.237L587.13 272.771C644.643 258.226 692.154 246.185 692.63 246.185C693.225 246.066 693.225 246.781 692.63 247.497ZM309.212 273.009C364.938 287.196 410.901 299.117 411.258 299.356C411.973 300.071 320.405 391.51 318.976 391.51C318.38 391.391 293.375 360.275 263.606 322.245C200.854 242.251 204.665 247.258 206.332 247.258C207.046 247.258 253.366 258.822 309.212 273.009ZM765.503 296.495C780.269 322.007 792.057 343.227 791.7 343.585C790.747 344.539 631.069 387.934 630.593 387.338C630.354 387.099 654.169 355.745 683.461 317.596C712.754 279.566 737.164 248.808 737.64 249.285C738.116 249.762 750.619 271.101 765.503 296.495ZM223.002 411.539L304.449 433.832L320.405 471.981C341.481 522.052 365.296 578.442 382.919 619.691C390.658 637.931 396.85 653.071 396.731 653.31C396.374 653.667 174.063 425.606 151.915 402.12C145.128 394.967 140.008 389.126 140.603 389.245C141.079 389.245 178.23 399.259 223.002 411.539ZM556.171 438.243C553.075 446.35 451.267 686.809 450.672 687.405C450.314 687.882 442.813 671.55 434.239 651.044C425.547 630.539 402.089 574.984 381.966 527.417C361.961 479.85 345.172 440.031 344.934 438.839C344.339 436.932 349.935 436.812 450.553 436.812C535.095 436.812 556.648 437.17 556.171 438.243Z"
			/>
		</svg>
	</IconButton>
	<IconButton size="xs" icon="message" variant="default" />
	<IconButton
		size="xl"
		variant="error"
		iconSize="2x"
		{loading}
		on:click={(e) => (loading = !loading)}
	>
		<svg viewBox="0 0 900 900" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M326.716 149.024C305.401 154.746 156.321 198.737 152.629 200.287C150.248 201.36 147.152 203.386 145.842 204.817C143.818 206.963 73.326 331.663 66.0625 345.85C62.9666 351.93 62.8475 357.533 65.7053 362.541C69.0394 368.74 439.836 748.921 443.884 750.352C449.243 752.259 454.363 751.782 459.126 748.802C463.532 746.179 830.28 370.051 834.209 364.21C835.638 362.183 836.352 358.845 836.352 354.791C836.352 348.473 835.4 346.685 796.344 279.685C774.315 241.774 754.906 209.109 753.358 206.963C751.691 204.817 748.119 201.956 745.499 200.764C742.76 199.452 700.013 187.054 650.597 173.106L560.696 147.712L446.98 147.474C349.459 147.235 332.312 147.474 326.716 149.024ZM611.779 198.975C643.214 207.917 669.173 215.308 669.292 215.547C669.887 216.023 449.957 271.101 447.338 271.101C443.765 271.101 226.693 215.904 227.408 215.189C227.765 214.831 251.699 207.44 280.634 198.856L333.265 183.12L443.884 183L554.504 182.881L611.779 198.975ZM692.63 247.497C691.797 248.927 620.233 342.512 593.203 377.443L581.415 392.702L531.999 345.969L482.703 299.237L587.13 272.771C644.643 258.226 692.154 246.185 692.63 246.185C693.225 246.066 693.225 246.781 692.63 247.497ZM309.212 273.009C364.938 287.196 410.901 299.117 411.258 299.356C411.973 300.071 320.405 391.51 318.976 391.51C318.38 391.391 293.375 360.275 263.606 322.245C200.854 242.251 204.665 247.258 206.332 247.258C207.046 247.258 253.366 258.822 309.212 273.009ZM765.503 296.495C780.269 322.007 792.057 343.227 791.7 343.585C790.747 344.539 631.069 387.934 630.593 387.338C630.354 387.099 654.169 355.745 683.461 317.596C712.754 279.566 737.164 248.808 737.64 249.285C738.116 249.762 750.619 271.101 765.503 296.495ZM223.002 411.539L304.449 433.832L320.405 471.981C341.481 522.052 365.296 578.442 382.919 619.691C390.658 637.931 396.85 653.071 396.731 653.31C396.374 653.667 174.063 425.606 151.915 402.12C145.128 394.967 140.008 389.126 140.603 389.245C141.079 389.245 178.23 399.259 223.002 411.539ZM556.171 438.243C553.075 446.35 451.267 686.809 450.672 687.405C450.314 687.882 442.813 671.55 434.239 651.044C425.547 630.539 402.089 574.984 381.966 527.417C361.961 479.85 345.172 440.031 344.934 438.839C344.339 436.932 349.935 436.812 450.553 436.812C535.095 436.812 556.648 437.17 556.171 438.243Z"
			/>
		</svg>
	</IconButton>
	<IconButton size="xs" variant="default" iconSize="2x">
		<svg viewBox="0 0 900 900" xmlns="http://www.w3.org/2000/svg" fill="#004894"
			><title>BASF</title>
			<path
				fill-rule="evenodd"
				d="M900 0H0V900H900V0ZM571.198 411.094H629.534C629.534 378.885 605.299 349 547.804 349C484.734 349 465.205 383.808 465.205 409.287C465.205 448.512 511.061 460.243 516.542 461.645C516.8 461.711 516.969 461.754 517.039 461.776C520.022 462.716 526.731 464.599 534.226 466.702L534.23 466.703C545.625 469.901 558.836 473.609 563.541 475.288C570.283 477.698 576.744 483.1 576.744 490.318C576.744 501.404 563.541 506.741 552.543 506.741C545.488 506.741 521.754 504.405 521.754 479.246H461.467C461.467 512.653 484.444 550.025 548.917 550.025C620.07 550.025 634.956 507.583 634.956 485.023C634.956 466.604 624.514 446.184 600.426 436.45C590.498 432.44 576.093 428.771 564.135 425.726L564.132 425.726L564.131 425.725C558.654 424.331 553.69 423.067 549.905 421.96C549.304 421.784 548.565 421.585 547.722 421.358C540.016 419.283 523.562 414.853 523.562 403.719C523.562 387.89 549.665 389.936 545.854 389.936C557.652 389.936 571.198 396.575 571.198 411.094ZM215.876 354.687H110.05L110 544.59H216.011C262.744 544.59 282.554 515.64 282.554 488.351C282.554 465.532 270.483 450.75 248.306 442.544C265.903 432.323 272.447 421.302 272.447 404.257C272.447 380.582 254.716 354.687 215.876 354.687ZM206.125 501.72H167.835V467.61H208.068C227.658 467.61 225.901 487.335 225.901 483.346C225.901 491.968 219.773 501.72 206.125 501.72ZM198.739 429.454H167.97V398.689H202.778C217.726 398.689 218.413 411.08 218.413 413.304C218.413 422.913 212.814 429.454 198.739 429.454ZM403.934 354.687H342.732L272.877 544.235H335.202L342.991 515.961H401.617L410.812 544.381H473.612L403.934 354.687ZM354.687 474.329L370.841 410.988L389.214 474.329H354.687ZM790.487 354.647H644.85L644.571 544.554H702.767V486.087H781.015V438.194H703.046V404.759H790.487V354.647Z"
			/>
		</svg>
	</IconButton>
	<Icon size="2x" icon="emoji" color="secondary" />
	<Icon size="2x" color="success">
		<svg viewBox="0 0 900 900" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M326.716 149.024C305.401 154.746 156.321 198.737 152.629 200.287C150.248 201.36 147.152 203.386 145.842 204.817C143.818 206.963 73.326 331.663 66.0625 345.85C62.9666 351.93 62.8475 357.533 65.7053 362.541C69.0394 368.74 439.836 748.921 443.884 750.352C449.243 752.259 454.363 751.782 459.126 748.802C463.532 746.179 830.28 370.051 834.209 364.21C835.638 362.183 836.352 358.845 836.352 354.791C836.352 348.473 835.4 346.685 796.344 279.685C774.315 241.774 754.906 209.109 753.358 206.963C751.691 204.817 748.119 201.956 745.499 200.764C742.76 199.452 700.013 187.054 650.597 173.106L560.696 147.712L446.98 147.474C349.459 147.235 332.312 147.474 326.716 149.024ZM611.779 198.975C643.214 207.917 669.173 215.308 669.292 215.547C669.887 216.023 449.957 271.101 447.338 271.101C443.765 271.101 226.693 215.904 227.408 215.189C227.765 214.831 251.699 207.44 280.634 198.856L333.265 183.12L443.884 183L554.504 182.881L611.779 198.975ZM692.63 247.497C691.797 248.927 620.233 342.512 593.203 377.443L581.415 392.702L531.999 345.969L482.703 299.237L587.13 272.771C644.643 258.226 692.154 246.185 692.63 246.185C693.225 246.066 693.225 246.781 692.63 247.497ZM309.212 273.009C364.938 287.196 410.901 299.117 411.258 299.356C411.973 300.071 320.405 391.51 318.976 391.51C318.38 391.391 293.375 360.275 263.606 322.245C200.854 242.251 204.665 247.258 206.332 247.258C207.046 247.258 253.366 258.822 309.212 273.009ZM765.503 296.495C780.269 322.007 792.057 343.227 791.7 343.585C790.747 344.539 631.069 387.934 630.593 387.338C630.354 387.099 654.169 355.745 683.461 317.596C712.754 279.566 737.164 248.808 737.64 249.285C738.116 249.762 750.619 271.101 765.503 296.495ZM223.002 411.539L304.449 433.832L320.405 471.981C341.481 522.052 365.296 578.442 382.919 619.691C390.658 637.931 396.85 653.071 396.731 653.31C396.374 653.667 174.063 425.606 151.915 402.12C145.128 394.967 140.008 389.126 140.603 389.245C141.079 389.245 178.23 399.259 223.002 411.539ZM556.171 438.243C553.075 446.35 451.267 686.809 450.672 687.405C450.314 687.882 442.813 671.55 434.239 651.044C425.547 630.539 402.089 574.984 381.966 527.417C361.961 479.85 345.172 440.031 344.934 438.839C344.339 436.932 349.935 436.812 450.553 436.812C535.095 436.812 556.648 437.17 556.171 438.243Z"
			/>
		</svg>
	</Icon>
	<Icon size="2x" color="dark">
		<svg
			width="100%"
			height="100%"
			viewBox="0 0 900 900"
			fill="#004894"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M0-0L0+900L900+900L900-0L0-0ZM50+50L850+50L850+850L50+850L50+50ZM547.812+349C484.742+349+465.219+383.802+465.219+409.281C465.219+450.352+515.472+461.291+517.031+461.781C524.55+464.149+555.73+472.497+563.531+475.281C570.273+477.691+576.75+483.096+576.75+490.312C576.75+501.398+563.529+506.75+552.531+506.75C545.476+506.75+521.75+504.409+521.75+479.25L461.469+479.25C461.469+512.657+484.432+550.031+548.906+550.031C620.059+550.031+634.969+507.591+634.969+485.031C634.969+466.612+624.525+446.171+600.438+436.438C585.96+430.589+561.954+425.491+549.906+421.969C543.817+420.182+523.563+416.071+523.562+403.719C523.562+387.89+549.655+389.938+545.844+389.938C557.642+389.938+571.188+396.575+571.188+411.094L629.531+411.094C629.531+378.885+605.307+349+547.812+349ZM644.844+354.656L644.562+544.562L702.781+544.562L702.781+486.094L781+486.094L781+438.188L703.031+438.188L703.031+404.75L790.5+404.75L790.5+354.656L644.844+354.656ZM110.062+354.688L110+544.594L216+544.594C262.733+544.594+282.562+515.633+282.562+488.344C282.562+465.525+270.49+450.737+248.312+442.531C265.91+432.31+272.438+421.295+272.438+404.25C272.438+380.575+254.715+354.688+215.875+354.688L110.062+354.688ZM342.719+354.688L272.875+544.25L335.188+544.25L343+515.969L401.625+515.969L410.812+544.375L473.625+544.375L403.938+354.688L342.719+354.688ZM167.969+398.688L202.781+398.688C217.729+398.688+218.406+411.089+218.406+413.312C218.406+422.922+212.825+429.469+198.75+429.469L167.969+429.469L167.969+398.688ZM370.844+411L389.219+474.344L354.688+474.344L370.844+411ZM167.844+467.625L208.062+467.625C227.653+467.625+225.906+487.333+225.906+483.344C225.906+491.966+219.773+501.719+206.125+501.719L167.844+501.719L167.844+467.625Z"
			/>
		</svg>
	</Icon>
</Hero>