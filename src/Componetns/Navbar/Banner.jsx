import { imageConverter } from "../../../public/Scripts/imageConverter"

function Banner() {
  return (
    <>
        <section className="pb-[114px] pt-20 md:mt-[100px] w-10/12 mx-auto">
		<div className="container lg:px-20">
			<div className="flex justify-between items-center md:grid-cols-2">
				<div className="flex justify-center md:order-2 h-[40vh] w-full">
					<img className="w-full h-full object-contain object-right" src={imageConverter('frame.png')} width="326" height="290" alt="frame" />
				</div>
				<div>
					<h1 className="mb-1.5 text-[56px] font-bold leading-none text-[#F5BF42] lg:text-[73px]">
						Tasker
					</h1>
					<p className="text-lg my-2 opacity-60">
						Effortlessly Organize, Prioritize, and Conquer Tasks with Tasker - Your Personal Productivity Ally for
						Seamless Goal Achievement and Stress-Free Task Management.
					</p>
				</div>
			</div>
		</div>
	</section>
    </>
  )
}

export default Banner