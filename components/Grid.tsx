import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import Skills from "./ui/skills";

const qualifications = [
  {
    id: 1,
    title: "Bachelor of Technology in Computer Science Engineering with AIML",
    institution: "Noida Institute of Engineering and Technology",
    year: "2021 - Present",
  },
  {
    id: 2,
    title: "Class 12th",
    institution: "Maxfort School Dwarka",
    year: "2021",
  },
  {
    id: 3,
    title: "Class 10th",
    institution: "Maxfort School Dwarka",
    year: "2019",
  },
];
const Grid = () => {
  return (
    <section id="about">

<div className="w-full mt-14 py-10 dark:bg-black-100 dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl text-white font-bold text-center mb-8 mt-6">My <span className="text-purple">Qualifications</span></h2>
        <ul className="space-y-4">
            {qualifications.map((qualification) => (
                <div key={qualification.id} className="relative group cursor-pointer"> {/* Added key prop */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-violet-600 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200">
                    </div>
                    <li key={qualification.id} className="relative bg-white rounded-2xl border border-white/[0.1] shadow p-4"
                        style={{background: "rgb(4,7,29)", backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)"}}
                    >
                        <h3 className="text-xl font-semibold">{qualification.title}</h3>
                        <p className="text-gray-400">{qualification.institution}</p>
                        <p className="text-gray-500">{qualification.year}</p>
                    </li>
                </div>
            ))}
        </ul>
    </div>
</div>
      <BentoGrid className="w-full py-20">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            // remove icon prop
            // remove original classname condition
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>

      {/* adding the marquee of the skills */}
        <Skills />
      
    </section>



    
  );
};

export default Grid;
