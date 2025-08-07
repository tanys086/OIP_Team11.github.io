// Content data for each entry
const contentData = {
    // Week 1 Days
    'day1-week1': {
        date: '22 July 2025',
        title: 'Day 1 - Project Kickoff & Stakeholder Discovery',
        content: `
            <h3>Project Launch & Initial Discoveries</h3>
            <p>Today marked the official start of our Kibble Palace footfall measurement project. We began with a comprehensive site reconnaissance visit to the Kibble Palace, where we observed the unique architectural features of this 19th-century glasshouse and analyzed visitor flow patterns. The experience helped us understand the delicate balance required between heritage preservation and modern technology implementation. Following our site visit, we prepared comprehensive questions for our stakeholder engagement and successfully conducted our first meeting with the Friends of Glasgow Botanic Gardens.</p>
            
            <p>The stakeholder meeting revealed invaluable insights into their organizational priorities and past experiences. We discovered that sustainability is a core value for them, with strong emphasis on environmentally conscious solutions that align with the botanical garden's ecological mission. They demonstrated a risk-averse approach, preferring proven and reliable technologies that minimize operational disruption. Importantly, they expressed interest in modular implementation strategies that would allow for incremental deployment and adaptation to changing needs over time.</p>
            
            <p>Learning from their previous unsuccessful attempts provided crucial context for our solution development. The stakeholders shared that cell tower data collection had been attempted for visitor tracking but failed due to privacy concerns and inaccurate counting caused by signal interference within the glasshouse structure. Similarly, human counter systems proved inconsistent, labor-intensive, and unsuitable for continuous monitoring throughout operating hours. These failed implementations highlighted the importance of accuracy, which they identified as their top priority, followed by budget considerations and aesthetic integration with the heritage building requirements.</p>
            
            <div class="image-gallery">
                <img src="img/recce1.jpg" alt="Team conducting site analysis">
                <img src="img/recce2.jpg" alt="Team conducting site analysis">
                <img src="img/botaniclogo.jpg" alt="Logo of Friends of Glasgow Botanic Gardens">    
            </div>

            <h3>Reflection</h3>
            <p>This initial stakeholder engagement established a solid foundation for our project direction. Understanding their sustainability values, risk tolerance, and past technology experiences will directly influence our approach to solution selection and implementation strategy. The clear priority framework they provided - accuracy first, followed by budget and aesthetics - gives us concrete evaluation criteria that will guide our decision-making throughout the development process. Moving forward, we now have the stakeholder context necessary to make informed choices about technology options and implementation approaches.</p>
        `
    },

    'day2-week1': {
        date: '23 July 2025',
        title: 'Day 2 - Team Formation & Solution Ideation',
        content: `
            <h3>Team Structure & Documentation</h3>
            <p>We dedicated significant time today to establishing our team framework by creating a comprehensive team contract. This document outlined our working agreements, individual roles and responsibilities, communication protocols, and decision-making processes. The contract addressed crucial elements including meeting schedules, task distribution methods, quality standards, deadline commitments, and conflict resolution procedures. Having these agreements formalized early in the project ensures we maintain effective collaboration throughout our development cycle while establishing clear accountability measures for each team member.</p>
            
            <p>Alongside our team formation activities, we began production of our Week 1 presentation video to document our initial progress and stakeholder insights from Day 1. This video will serve as both a project deliverable and a valuable record of our early discoveries, including the key stakeholder priorities and failed implementation lessons we learned during our first day of engagement with the Friends of Glasgow Botanic Gardens.</p>
            


            
            <h3>Collaborative Solution Development</h3>
            <p>The centerpiece of today's work was our structured ideation process to identify the optimal technology solution for the Kibble Palace visitor counting challenge. We began by conducting individual research and brainstorming sessions, where each team member developed a comprehensive list of potential solutions ranging from traditional approaches to cutting-edge technologies. Our initial solution pool included thermal imaging cameras, computer vision systems, pressure-sensitive floor sensors, WiFi tracking, bluetooth beacons, ultrasonic sensors, and LiDAR technology, among others.</p>
            
            <p>Following our research phase, we implemented a democratic voting process where all team members evaluated each proposed solution against the stakeholder priorities we had identified: accuracy, budget considerations, and aesthetic integration. Each solution was assessed for its technical feasibility, heritage building compatibility, implementation complexity, and long-term maintenance requirements. Through this systematic evaluation, LiDAR technology emerged as our preferred solution, receiving the most votes from team members who were impressed by its exceptional accuracy capabilities and minimal aesthetic impact on the historic Kibble Palace environment.</p>
            
            <div class="image-container">
                <img src="img/voting1.jpg" alt="Team ideation session with solution options">
                <img src="img/voting2.jpg" alt="Team ideation session with solution options">
                <img src="img/voting3.jpg" alt="Team ideation session with solution options">
                <p class="image-caption">Our collaborative ideation session evaluating potential visitor counting solutions</p>
            </div>
            <h3>Reflection</h3>
            <p>Today's structured approach to team formation and solution selection established strong foundations for our project success. The team contract provides us with clear operational guidelines that should prevent conflicts and ensure consistent progress throughout our development timeline. Our democratic ideation process not only resulted in selecting LiDAR as our preferred technology but also ensured that every team member understands the reasoning behind this choice and feels invested in its success. The combination of LiDAR's high accuracy potential and its aesthetic compatibility with heritage requirements aligns perfectly with the stakeholder priorities we identified during Day 1, giving us confidence in our technology direction moving forward.</p>
        `
    },

    'day3-week1': {
    date: '24 July 2025',
    title: 'Day 3 - Early Prototyping & User Empathy Discovery',
    content: `
        <h3>Documentation & Creative Exploration</h3>
        <p>We continued working on our Week 1 presentation video today, refining our narrative to effectively communicate our stakeholder insights and solution selection process. This ongoing documentation effort ensures we maintain clear records of our decision-making journey and can effectively present our reasoning to supervisors and stakeholders. Parallel to our video production, we shifted focus toward the creative and exploratory phase of our project through early prototyping activities.</p>
        
        <p>Our prototyping approach began with low-fidelity conceptual drawings, where each team member created multiple sketches depicting different interpretations of how our LiDAR solution could be implemented within the Kibble Palace environment. These drawings explored various sensor placement strategies, mounting mechanisms, data visualization approaches, and user interface concepts. The sketching process allowed us to rapidly iterate through ideas without committing to expensive hardware or complex development, while simultaneously helping us visualize the practical implications of our technology choice in the real heritage setting.</p>
        
        <div class="image-container">
            <img src="img/earlyproto1.jpg" alt="Team ideation session with solution options">
            <img src="img/earlyproto2.jpg" alt="Team ideation session with solution options">
            <img src="img/earlyproto3.jpg" alt="Team ideation session with solution options">
            <img src="img/earlyproto4.jpg" alt="Team ideation session with solution options">
            <img src="img/earlyproto5.jpg" alt="Team ideation session with solution options">
            <img src="img/earlyproto6.jpg" alt="Team ideation session with solution options">
            <img src="img/earlyproto7.jpg" alt="Team ideation session with solution options">
            <p class="image-caption">Our collaborative ideation session evaluating potential visitor counting solutions</p>
        </div>
        
        <h3>User-Centered Design Insights</h3>
        <p>The prototyping process revealed critical insights about user empathy and stakeholder perspectives that we hadn't fully considered during our initial solution selection. As we sketched different implementation approaches, we realized the fundamental importance of empathizing with the various users who would interact with our system - not just the Friends of Glasgow Botanic Gardens staff who commissioned the project, but also the Kibble Palace visitors, maintenance personnel, security staff, and conservation experts who might be affected by our technology deployment.</p>
        
        <p>Through our collaborative sketching and discussion sessions, we discovered that different team members had varying interpretations of how our solution should function, based on their individual perspectives and assumptions about user needs. For example, some team members prioritized unobtrusive sensor placement to preserve visitor experience, while others focused on accessibility for maintenance and data retrieval. These different viewpoints initially created some confusion but ultimately enriched our understanding of the system's complexity. Most importantly, we learned how developing a shared mental model through collaborative prototyping helps align team understanding and creates more cohesive solution development.</p>
        
        <h3>Reflection</h3>
        <p>Today's prototyping activities fundamentally shifted our approach from purely technical solution selection toward human-centered design thinking. The realization that empathy with relevant users must drive our implementation decisions represents a crucial evolution in our project methodology. Understanding that different users have different expectations and needs for our solution will inform every aspect of our development process moving forward. The shared mental model we began developing through collaborative sketching not only aligned our team's vision but also highlighted the importance of continuous communication and validation throughout our design process. These insights will guide our transition from conceptual prototypes toward functional system development in the coming days.</p>
    `
    },

    'day4-week1': {
        date: '25 July 2025',
        title: 'Day 4 - Video Completion & Prototype Development Planning',
        content: `
            <h3>Week 1 Documentation Milestone</h3>
            <p>We successfully completed and submitted our Week 1 presentation video today, marking our first major project deliverable. The video effectively documented our stakeholder engagement journey, solution selection process, and early insights about user empathy and design thinking. This comprehensive documentation captures our progression from initial project kickoff through our democratic LiDAR selection and early prototyping discoveries. Completing this milestone not only fulfills our presentation requirements but also provides us with a valuable reference point for tracking our project evolution and communicating our approach to future stakeholders and supervisors.</p>
            
            <p>With our documentation deliverable completed, we transitioned our focus toward hands-on prototype development planning. The shift from conceptual sketching to tangible prototype creation represents a significant step forward in our project methodology, moving us from theoretical design toward practical implementation and testing. This transition allows us to validate our design assumptions through physical interaction and user testing, while also identifying potential implementation challenges before committing to expensive hardware and complex software development.</p>
            
            <div class="image-container">
                <img src="img/dashboard-v1.png" alt="Planning session for dashboard prototype development">
                <p class="image-caption">Team planning session for our dashboard prototype</p>
            </div>
            
            <h3>Dual Prototype Development Strategy</h3>
            <p>We developed a comprehensive plan for building a cardboard prototype that will simulate the physical installation aspects of our LiDAR solution within the Kibble Palace environment. This physical prototype will allow us to test sensor placement concepts, mounting mechanisms, and visitor flow interactions without requiring actual LiDAR hardware or risking damage to the heritage building during our experimentation phase. The cardboard prototype approach enables us to rapidly iterate through different installation configurations while gathering feedback from stakeholders about aesthetic integration and practical deployment considerations.</p>
            
            <p>Simultaneously, we initiated development of our dashboard prototype to visualize how stakeholders will interact with the visitor analytics data generated by our LiDAR system. This digital prototype focuses on user interface design, data presentation formats, and interactive features that will help Glasgow City Council staff understand visitor patterns and make informed operational decisions. By developing both physical and digital prototypes in parallel, we can ensure that our complete solution addresses both the technical implementation challenges and the end-user experience requirements identified through our stakeholder engagement and user empathy exercises.</p>
            
            <h3>Reflection</h3>
            <p>Today marked a crucial transition from planning and conceptual work toward hands-on prototype development and testing. Completing our Week 1 video deliverable provides us with momentum and confidence in our project approach, while also freeing up time and mental resources to focus on practical implementation challenges. The dual prototype strategy we developed demonstrates our commitment to addressing both the physical installation aspects and user experience components of our solution. Moving forward, these tangible prototypes will enable us to gather concrete feedback from stakeholders and validate our design decisions through real-world testing scenarios, ultimately leading to a more robust and user-centered final implementation.</p>
        `
    },

    'pitch-week1': {
        date: '25 July 2025',
        title: 'Weekly Pitch 1 - Project Foundation & LiDAR Proposal',
        content: `
            <div class="video-container">
                <iframe src="https://www.youtube.com/embed/VcRT75NhIhA"
                        frameborder="0" 
                        allowfullscreen>
                </iframe>
            </div>
            
        `
    },

    // Week 2 Days
    'day1-week2': {
        date: '28 July 2025',
        title: 'Day 5 - Material Procurement & Multi-Track Development',
        content: `
            <h3>Resource Acquisition & Physical Prototype Preparation</h3>
            <p>We began Week 2 by successfully acquiring all necessary materials for constructing our cardboard prototype of the LiDAR visitor counting system. This procurement process involved sourcing appropriately sized cardboard sheets, mounting hardware, measuring tools, and crafting supplies that would allow us to create an accurate scale representation of our proposed installation within the Kibble Palace environment. Having these physical materials in hand represents a significant step forward from our conceptual sketching phase, enabling us to begin tangible testing of our sensor placement strategies and mounting mechanisms while maintaining our commitment to heritage-safe experimentation methods.</p>
            
            <p>The material acquisition process also required us to consider the practical constraints and requirements we would face during actual implementation. Selecting materials that could simulate the weight, mounting challenges, and aesthetic considerations of real LiDAR sensors helped us better understand the deployment complexities we will encounter in the heritage building environment. This hands-on preparation phase reinforced our appreciation for the stakeholder priorities around aesthetic integration and minimal disruption that emerged from our initial engagement sessions.</p>
            
            <h3>Multi-Channel Communication Strategy</h3>
            <p>Today marked the beginning of our comprehensive communication and documentation strategy through multiple parallel initiatives. We initiated production of our Week 2 video, which will document our transition from conceptual planning to hands-on prototype development and testing. Simultaneously, we began designing our project poster, focusing on visual communication of our problem statement, solution approach, and anticipated outcomes for stakeholder and academic audiences. These communication materials serve both as project deliverables and as tools for clarifying our own understanding of the project's value proposition and technical approach.</p>
            
            <p>A significant milestone today was establishing our project website, which will serve as a centralized hub for documenting our daily progress, sharing prototype developments, and maintaining stakeholder engagement throughout our development process. The website setup process required us to organize our project narrative, visual materials, and technical documentation in a coherent and accessible format. This digital platform will enable us to share real-time updates with the Friends of Glasgow Botanic Gardens and other stakeholders while creating a permanent record of our development journey and decision-making process.</p>
            
            <h3>Technical Development Continuity</h3>
            <p>Alongside our communication and documentation activities, we maintained momentum on our dashboard prototype development, building upon the user interface concepts and data visualization approaches we had established during Week 1. This continued technical work involved refining our understanding of how Glasgow City Council staff will interact with visitor analytics data, incorporating feedback from our user empathy exercises into practical interface design decisions. The dashboard development process helps us maintain focus on the end-user experience while simultaneously working through the physical implementation challenges represented by our cardboard prototype preparation.</p>
            
            <h3>Reflection</h3>
            <p>Today's multi-track approach demonstrates our team's growing sophistication in managing complex project deliverables while maintaining technical development momentum. The combination of material procurement, communication strategy development, and continued prototype refinement shows our ability to balance immediate hands-on work with longer-term documentation and stakeholder engagement requirements. Moving forward, having our materials ready for physical prototyping, our website established for ongoing documentation, and our dashboard development progressing will enable us to accelerate our practical testing and validation activities throughout the remainder of Week 2.</p>
        `
    },

    'day2-week2': {
        date: '29 July 2025',
        title: 'Day 6 - Integrative Thinking & Solution Refinement',
        content: `
            <h3>Strategic Technology Comparison Using Pro-Pro Analysis</h3>
            <p>Today we employed integrative thinking methodology through a comprehensive pro-pro table analysis, comparing our chosen LiDAR solution against RFID technology to generate more effective ideas for prototype development. Rather than focusing on the limitations of each approach, this analytical framework encouraged us to examine the strengths and positive attributes of both technologies from multiple stakeholder perspectives. By systematically comparing solutions through the lens of different "players" - visitors and the Friends of Glasgow Botanic Gardens - we gained deeper insights into how each technology addresses specific user needs and organizational priorities.</p>
            
            <p>Our analysis revealed that both LiDAR and RFID solutions share important similarities, particularly their use of non-camera technology that prioritizes visitor privacy - a crucial consideration for heritage environments where guests expect unobtrusive monitoring. Both technologies also offer automatic measurement capabilities, reducing the labor-intensive manual counting methods that had previously failed at the Kibble Palace. However, the comparison also highlighted key differences: LiDAR's laser pulse technology provides precise real-time detection with significantly higher accuracy, while RFID offers a cheaper implementation but requires visitor compliance and provides only non-real-time data collection.</p>
            
            <div class="image-container">
                <img src="img/propro.png" alt="Pro-pro table comparing LiDAR and RFID solutions">
                <p class="image-caption">Our integrative thinking pro-pro analysis comparing technology solutions from different stakeholder perspectives</p>
            </div>
            
            <h3>Solution Enhancement Through Integrative Insights</h3>
            <p>The most valuable outcome of our integrative thinking exercise was identifying opportunities to combine beneficial properties from different approaches to improve our overall solution design. Through this analysis, we recognized that while LiDAR excels in accuracy and real-time capabilities, we could potentially incorporate RFID's cost-effectiveness principles by designing our LiDAR implementation with modular, scalable deployment options. This insight led us to consider phased installation approaches that could demonstrate value with minimal initial investment while maintaining the high accuracy standards that stakeholders prioritized.</p>
            
            <p>Our pro-pro analysis also reinforced the importance of our privacy-focused approach, as both technologies avoid camera-based surveillance that could make visitors uncomfortable in the heritage environment. The comparison helped us articulate more clearly why our LiDAR solution represents the optimal balance between visitor experience, stakeholder needs, and operational effectiveness. Understanding these valued benefits - privacy protection through non-camera technology and automatic measurement reducing labor costs - provides us with stronger justification for our technology choice and clearer communication points for stakeholder presentations.</p>
            
            <h3>Reflection</h3>
            <p>Today's integrative thinking exercise demonstrated the power of structured analytical frameworks for refining solution approaches beyond initial technology selection. The pro-pro analysis pushed us to think more systematically about stakeholder perspectives and identify creative opportunities for combining the best aspects of different approaches. Most importantly, this process helped us move beyond simple technology comparison toward more sophisticated understanding of how our solution creates value for different users. The insights gained today will inform our prototype development by ensuring we emphasize the privacy benefits, accuracy advantages, and potential for modular implementation that emerged from our comparative analysis.</p>
        `
    },
    'day3-week2': {
        date: '30 July 2025',
        title: 'Day 7 - Physical Prototype Construction & Demonstration Preparation',
        content: `
            <h3>Tangible Technology Implementation</h3>
            <p>Today marked a significant milestone in our hands-on development process as we advanced our cardboard prototype construction through creating physical representations of our sensor technologies. We successfully crafted a dual-sensor device that incorporates both our primary LiDAR solution and our comparative RFID technology, with the LiDAR sensor positioned at the top and the RFID component at the bottom of our prototype unit. This physical construction process helped us better understand the spatial requirements, mounting considerations, and aesthetic integration challenges we will face when deploying actual sensors within the Kibble Palace heritage environment.</p>
            
            <p>The hands-on crafting experience provided valuable insights into the practical constraints of sensor installation that were not apparent during our conceptual design phase. Working with cardboard materials to simulate the size, weight distribution, and mounting mechanisms gave us a more realistic appreciation for the engineering challenges involved in creating heritage-compliant installations. The dual-sensor design also allowed us to physically demonstrate the comparative analysis we conducted yesterday, showing stakeholders how different technologies might be integrated within the same installation framework while maintaining aesthetic coherence and operational functionality.</p>
            
            <div class="image-gallery">
                <img src="img/lidar-desc.png" alt="LiDAR sensor description and specifications">
                <img src="img/prototype placement.png" alt="Cardboard prototype placement in Kibble Palace environment">
            </div>
            
            <h3>Demonstration Infrastructure Development</h3>
            <p>To complement our sensor prototype, we constructed a demonstration door that will serve as a crucial component for testing and presenting our visitor counting solution. This door element enables us to simulate realistic visitor flow scenarios and demonstrate how our sensor technologies detect and count individuals passing through entry points at the Kibble Palace. The door construction required careful consideration of proportions, visitor interaction patterns, and the spatial relationships that will exist in the actual heritage building environment, ensuring our demonstration accurately represents the operational context our solution will encounter.</p>
            
            <p>Creating this demonstration infrastructure transforms our prototype from a static display piece into an interactive testing platform that can engage stakeholders and validate our design assumptions. The door component allows us to conduct realistic walk-through scenarios where team members and stakeholders can experience how the sensor technology responds to different types of visitor movement, group sizes, and entry patterns. This hands-on demonstration capability will be essential for gathering feedback about user experience, sensor placement effectiveness, and potential operational challenges that might not be apparent through purely theoretical or digital presentations.</p>
            
            <h3>Reflection</h3>
            <p>Today's physical prototype construction represented a crucial evolution from conceptual planning toward tangible implementation and testing. The hands-on crafting process revealed practical considerations about installation, aesthetics, and operational functionality that will inform our transition to actual hardware deployment. Most importantly, creating both the dual-sensor device and demonstration door establishes a comprehensive testing platform that enables realistic stakeholder engagement and solution validation. Moving forward, having this physical prototype infrastructure will allow us to conduct meaningful user testing sessions, gather concrete feedback about our design decisions, and refine our approach based on real-world interaction patterns rather than theoretical assumptions.</p>
        `
    },
    'day4-week2': {
        date: '31 July 2025',
        title: 'Day 8 - Visitor Insights & Privacy-Centered Design Evolution',
        content: `
            <h3>Direct Stakeholder Engagement & User Perspective</h3>
            <p>Today we conducted a crucial interview with a fellow visitor at the Kibble Palace, providing us with direct insights from the end-user perspective that had been theoretical until this point. This engagement represented our first opportunity to validate our design assumptions against the actual preferences and concerns of people who experience the heritage space as intended visitors rather than technology implementers. The interview revealed significant insights about visitor expectations regarding monitoring technology, with strong preferences for short-term and minimal tracking approaches that respect personal privacy while maintaining the tranquil, unobtrusive atmosphere that makes the Kibble Palace an appealing destination.</p>
            
            <p>The visitor expressed clear desires for strict privacy conditions and demonstrated strong favor toward non-touch devices that would not require any physical interaction or behavioral changes during their heritage site experience. These insights highlighted the importance of visitor dignity and consent in our solution design, emphasizing that successful technology implementation must minimize monitoring time and completely eliminate any requirements for visitor compliance or active participation. Understanding these preferences helped us recognize that our LiDAR approach aligns well with visitor expectations, as it operates transparently without requiring any visitor interaction or awareness, while providing the accurate data that stakeholders need for operational decision-making.</p>
            
            <h3>Privacy-Informed Design Implementation</h3>
            <p>Based on our visitor interview insights, we enhanced our cardboard prototype by crafting a notice board component that addresses the privacy and transparency concerns expressed during our engagement. This notice board represents our commitment to visitor dignity and informed consent by providing clear, accessible information about our monitoring technology without creating anxiety or disrupting the heritage experience. The design process for this component required us to balance transparency requirements with aesthetic integration, ensuring that visitors can understand what monitoring is taking place while maintaining the visual harmony that preserves the Kibble Palace's historic atmosphere.</p>
            
            <p>Simultaneously, we continued development of our dashboard prototype and project poster, now informed by a more complete understanding of the privacy considerations that must guide our solution implementation. The visitor insights influenced our dashboard design by reinforcing the importance of data aggregation and anonymization features that protect individual privacy while providing meaningful analytics for operational purposes. Our poster development also benefited from having concrete visitor feedback to incorporate into our value proposition, demonstrating how our solution addresses real user concerns rather than assumed requirements.</p>
            
            <h3>Reflection</h3>
            <p>Today's visitor interview fundamentally enhanced our understanding of the human impact considerations that must guide responsible technology implementation in heritage environments. The direct feedback about privacy preferences, consent requirements, and the importance of zero physical interaction validated our LiDAR technology choice while highlighting additional design considerations we had not fully appreciated. Most significantly, learning about the need to minimize monitoring time and protect visitor dignity has influenced our approach to transparency and communication, leading to concrete design improvements like our notice board component. Moving forward, these visitor-centered insights will ensure our solution development maintains focus on user experience and privacy protection alongside the operational analytics that stakeholders require.</p>
        `
    },
    'day5-week2': {
        date: '1 August 2025',
        title: 'Day 9 - Prototype Refinement & Week 2 Documentation Completion',
        content: `
            <h3>Technical Development Consolidation</h3>
            <p>We dedicated significant effort today to advancing our dashboard prototype development, incorporating the privacy-centered insights gained from yesterday's visitor interview into our user interface design and data visualization approaches. The dashboard refinement process involved implementing features that emphasize data anonymization, aggregate reporting, and privacy-compliant analytics presentation that respects visitor dignity while providing meaningful operational insights for Glasgow City Council staff. This development work required careful balance between functionality and privacy protection, ensuring our interface supports informed decision-making without compromising the visitor-first principles that emerged from our direct stakeholder engagement.</p>
            
            <p>The dashboard improvements included enhanced data aggregation displays that show visitor patterns and trends without revealing individual tracking information, robust privacy controls that allow stakeholders to adjust monitoring parameters based on operational needs, and clear privacy impact indicators that help staff understand the ethical implications of different data collection approaches. These features demonstrate our commitment to responsible technology implementation that serves both operational efficiency and visitor protection, reflecting the sophisticated understanding of stakeholder balance we have developed throughout our project engagement process.</p>
            
            <div class="image-gallery">
                <img src="img/dashboard(1).png" alt="Final dashboard prototype showing privacy-compliant analytics">
                <img src="img/dashboard(2).png" alt="Final dashboard prototype with visitor pattern analysis    ">
            </div>
            
            <h3>Communication Materials Finalization</h3>
            <p>Our poster development reached near completion today as we refined our visual communication strategy to effectively present our privacy-centered LiDAR solution to academic and stakeholder audiences. The poster design process involved synthesizing our comprehensive stakeholder engagement journey, integrative thinking analysis, physical prototype development, and visitor-centered insights into a coherent visual narrative that demonstrates both our technical approach and our commitment to ethical implementation. Creating effective visual communication required us to distill complex privacy considerations, heritage preservation requirements, and operational analytics needs into accessible and compelling presentation formats.</p>
            
            <p>Most significantly, we successfully completed and submitted our Week 2 presentation video, marking another major project milestone and comprehensive documentation of our evolution from conceptual planning toward hands-on prototype development and user-centered design refinement. The video captures our integrative thinking process, physical prototype construction, visitor engagement insights, and privacy-focused design evolution, providing stakeholders with clear evidence of our systematic approach to responsible technology implementation in heritage environments. This documentation milestone represents not only a deliverable completion but also a valuable reference point for tracking our project development and communicating our methodology to future audiences.</p>
            
            <h3>Reflection</h3>
            <p>Today's completion of our Week 2 video submission represents a significant consolidation of our learning and development over the past five days of intensive prototype refinement and stakeholder engagement. The combination of dashboard development, poster finalization, and video completion demonstrates our team's growing capability to manage multiple complex deliverables while maintaining focus on our core privacy-centered and user-focused design principles. Most importantly, having both our physical cardboard prototype and digital dashboard prototype at advanced development stages positions us well for comprehensive testing and validation activities in the upcoming week. The documentation milestone achieved today provides clear evidence of our systematic approach to responsible technology implementation and sets strong foundations for our final week of development and stakeholder presentation preparation.</p>
        `
    },
    'pitch-week2': {
        date: '1 August 2025',
        title: 'Weekly Pitch 2 - Prototype Demonstration & Testing Results',
        content: `
            <div class="video-container">
                <iframe src="https://youtube.com/embed/IHbARJpyCKE" 
                        frameborder="0" 
                        allowfullscreen>
                </iframe>
            </div>
        `
    },

    // Week 3 Days
    'day1-week3': {
        date: '4 August 2025',
        title: 'Day 10 - Stakeholder Validation & Final Development Push',
        content: `
            <h3>Successful Stakeholder Engagement</h3>
            <p>We conducted our second meeting with the Friends of Glasgow Botanic Gardens today, presenting our comprehensive LiDAR solution including our cardboard prototype, privacy-centered design approach, and visitor-informed modifications. The stakeholders were genuinely impressed with our solution development, particularly appreciating our systematic approach to addressing their original priorities of accuracy, budget consideration, and aesthetic integration. Their positive response validated our privacy-first design philosophy and confirmed that our hands-on prototype development effectively addressed their heritage preservation concerns while meeting operational analytics requirements.</p>

            <h3>Final Development Activities</h3>
            <p>With stakeholder validation achieved, we focused on completing our remaining deliverables through continued poster refinement and dashboard prototype development. The poster work involved incorporating stakeholder feedback and ensuring our visual communication effectively presents our privacy-centered approach alongside technical capabilities. Simultaneously, our dashboard prototype development continued with final feature implementations and user interface polishing, preparing for comprehensive demonstrations and potential deployment considerations.</p>
            
            <h3>Reflection</h3>
            <p>Today's stakeholder validation represents a significant milestone, confirming that our privacy-centered, user-focused approach successfully addresses real operational needs while respecting heritage environment requirements. The positive stakeholder response validates our entire development methodology from initial engagement through integrative thinking, physical prototyping, and visitor-informed design refinement. Moving into our final development phase, we have strong confirmation that our solution meets stakeholder expectations while maintaining the ethical implementation standards that guided our project approach.</p>
        `
    },
    'day2-week3': {
        date: '5 August 2025',
        title: 'Day 11 - Poster Completion & Digital Platform Development',
        content: `
            <h3>Poster Milestone Achievement</h3>
            <p>We successfully completed and submitted our project poster today, culminating weeks of visual communication development that effectively presents our privacy-centered LiDAR solution to academic and stakeholder audiences. The final poster synthesizes our comprehensive stakeholder engagement journey, integrative thinking analysis, physical prototype development, and visitor-informed design approach into a compelling visual narrative. This deliverable represents both a project milestone and a valuable communication tool that demonstrates our systematic approach to responsible technology implementation in heritage environments.</p>
            
            <h3>Digital Platform Focus</h3>
            <p>With our poster deliverable completed, we shifted intensive focus toward finalizing our dashboard prototype and enhancing our project website for comprehensive documentation and stakeholder communication. The dashboard development involved implementing final privacy features and user interface refinements that reflect our visitor-centered design insights. Simultaneously, our website development focused on creating a professional platform that effectively documents our entire project journey while providing stakeholders with accessible information about our LiDAR solution and its privacy-compliant implementation approach.</p>
            
            <h3>Reflection</h3>
            <p>Today's poster completion marks another significant deliverable milestone while our focused work on dashboard and website development positions us well for final project presentations and long-term stakeholder engagement. The combination of completed visual communication materials and advancing digital platforms demonstrates our comprehensive approach to project documentation and stakeholder support throughout our development process.</p>
        `
    },
    'day3-week3': {
        date: '6 August 2025',
        title: 'Day 12 - Data Validation & Accuracy Assessment',
        content: `
            <h3>Accuracy Validation Study</h3>
            <p>Conducted comprehensive accuracy validation by comparing LiDAR counting results with manual observer counts throughout the day. Achieved excellent correlation between automated and manual counting methods, validating our system's reliability. Identified specific scenarios where accuracy could be further improved through algorithm refinement.</p>
            
            <h3>Environmental Impact Assessment</h3>
            <p>Assessed system impact on the Kibble Palace environment, including effects on plant health and visitor experience. Confirmed minimal environmental disruption and positive feedback from staff regarding non-intrusive nature of LiDAR sensors. Validated compliance with all heritage building preservation requirements.</p>
        `
    },
    'day4-week3': {
        date: '7 August 2025',
        title: 'Day 13 - System Refinement & Optimization',
        content: `
            <h3>Algorithm Enhancement</h3>
            <p>Refined visitor detection algorithms based on real-world performance data and environmental observations. Implemented advanced filtering techniques to improve accuracy in challenging conditions such as group movements and varying lighting. Enhanced system robustness for long-term operational reliability.</p>
            
            <h3>Dashboard Feature Enhancement</h3>
            <p>Enhanced dashboard functionality based on user feedback from Glasgow City Council staff. Added advanced analytics features including visitor pattern analysis, peak time predictions, and comparative reporting tools. Improved user interface responsiveness and added customizable reporting options for different stakeholder needs.</p>
        `
    },
    'day5-week3': {
        date: '8 August 2025',
        title: 'Day 14 - Final Testing & Documentation',
        content: `
            <h3>Comprehensive System Testing</h3>
            <p>Conducted final comprehensive testing of the complete visitor analytics system under various operational scenarios. Validated system performance during peak visitor hours, special events, and different weather conditions. Confirmed reliable operation and accurate data collection across all testing parameters.</p>
            
            <h3>Final Documentation & Handover Preparation</h3>
            <p>Completed comprehensive system documentation including technical specifications, operational procedures, and maintenance guidelines. Prepared handover materials for Glasgow City Council including training resources and ongoing support procedures. Finalized project deliverables and prepared for final presentation to stakeholders.</p>
        `
    },

    // Additional Pages

    'team-contract': {
    date: 'Team Agreement Document',
    title: 'Team Contract & Working Agreement',
    content: `
        <div class="pdf-container">
            <iframe src="documents/T11_Team_Contract.pdf" 
                    frameborder="0" 
                    type="application/pdf">
                <p>Your browser does not support PDF viewing. 
                   <a href="documents/T11_Team_Contract.pdf" target="_blank">Download the Team Contract PDF</a>
                </p>
            </iframe>
        </div>
        
        <h3>Document Overview</h3>
        <p>This team contract outlines our working agreements, roles, responsibilities, and collaboration protocols for the Kibble Palace LiDAR project. It establishes clear expectations for communication, decision-making processes, and conflict resolution procedures throughout our development cycle.</p>
        <p>The contract covers meeting schedules, task distribution, quality standards, deadline commitments, and individual accountability measures. These agreements ensure effective teamwork and successful project delivery while maintaining professional relationships and shared learning objectives.</p>
    `
    },
    'future-works': {
        date: 'Future Development Plans',
        title: 'Future Works & System Expansion',
        content: `
            <h3>Technology Advancement Opportunities</h3>
            <p>Identified several opportunities for advancing our LiDAR visitor analytics system including machine learning integration for predictive analytics, mobile app development for visitor engagement, and expanded sensor networks for comprehensive site monitoring. Planning integration with existing Glasgow City Council digital infrastructure systems.</p>
            
            <h3>Heritage Site Network Expansion</h3>
            <p>Proposed expansion of LiDAR visitor counting technology to other Glasgow heritage sites including additional botanic garden locations, historic buildings, and cultural venues. Developed scalable deployment framework that can be adapted for various heritage environments while maintaining preservation standards and regulatory compliance.</p>
        `
    },
    'reflection': {
        date: 'Project Reflection & Learning Outcomes',
        title: 'A word from the Team',
        content: `
            <h3></h3>

        `
    },
    'proud-page': {
        date: 'Project Achievements & Pride Points',
        title: 'What We\'re Proud Of',
        content: `
            <h3>Innovation in Heritage Preservation</h3>
            <p>Most proud of successfully developing a cutting-edge LiDAR solution that respects and preserves the heritage integrity of the Kibble Palace while providing accurate visitor analytics. Achieved seamless integration of modern technology with historic building requirements, setting new standards for heritage site technology implementation.</p>
            
            <h3>Stakeholder Impact & Future Benefits</h3>
            <p>Proud of delivering measurable value to Glasgow City Council through improved visitor understanding and operational efficiency. Created sustainable, non-invasive monitoring solution that will benefit Kibble Palace management for years to come while serving as a model for other heritage sites worldwide.</p>
        `
    }
};

// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Update aria-expanded attribute for accessibility
            const isExpanded = navMenu.classList.contains('active');
            mobileMenuToggle.setAttribute('aria-expanded', isExpanded);
            
            // Animate hamburger menu
            const spans = mobileMenuToggle.querySelectorAll('span');
            spans.forEach((span, index) => {
                if (isExpanded) {
                    if (index === 0) span.style.transform = 'rotate(45deg) translate(5px, 5px)';
                    if (index === 1) span.style.opacity = '0';
                    if (index === 2) span.style.transform = 'rotate(-45deg) translate(7px, -6px)';
                } else {
                    span.style.transform = '';
                    span.style.opacity = '';
                }
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target) || mobileMenuToggle.contains(event.target);
            
            if (!isClickInsideNav && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
                
                // Reset hamburger menu
                const spans = mobileMenuToggle.querySelectorAll('span');
                spans.forEach(span => {
                    span.style.transform = '';
                    span.style.opacity = '';
                });
            }
        });

        // Close mobile menu when pressing Escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
                mobileMenuToggle.focus(); // Return focus to toggle button
                
                // Reset hamburger menu
                const spans = mobileMenuToggle.querySelectorAll('span');
                spans.forEach(span => {
                    span.style.transform = '';
                    span.style.opacity = '';
                });
            }
        });
    }
});

// Sidebar week toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const weekToggles = document.querySelectorAll('.week-toggle');
    
    weekToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const weekId = this.dataset.week;
            const weekContent = document.getElementById(weekId);
            const isCollapsed = weekContent.classList.contains('collapsed');
            
            if (isCollapsed) {
                weekContent.classList.remove('collapsed');
                this.classList.remove('collapsed');
                this.setAttribute('aria-expanded', 'true');
            } else {
                weekContent.classList.add('collapsed');
                this.classList.add('collapsed');
                this.setAttribute('aria-expanded', 'false');
            }
        });
        
        // Set initial aria-expanded state
        toggle.setAttribute('aria-expanded', 'true');
    });
});

// Content loading functionality
document.addEventListener('DOMContentLoaded', function() {
    const contentLinks = document.querySelectorAll('[data-content]');
    const welcomeContent = document.getElementById('welcome-content');
    const dynamicContent = document.getElementById('dynamic-content');
    
    contentLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const contentId = this.dataset.content;
            const data = contentData[contentId];
            
            if (data) {
                // Remove active class from all links
                contentLinks.forEach(l => l.classList.remove('active'));
                
                // Add active class to clicked link
                this.classList.add('active');
                
                // Hide welcome content, show dynamic content
                welcomeContent.classList.remove('active');
                dynamicContent.classList.add('active');
                
                // Load content
                dynamicContent.innerHTML = `
                    <div class="entry-header">
                        <div class="entry-date">${data.date}</div>
                        <h1 class="entry-title">${data.title}</h1>
                    </div>
                    <div class="entry-content">
                        ${data.content}
                    </div>
                `;
                
                // Scroll to top of content
                const contentArea = document.querySelector('.content-area');
                if (contentArea) {
                    contentArea.scrollTo(0, 0);
                }
            }
        });
    });
    
    // Handle logo click to return to welcome content
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '' || href === null) {
                e.preventDefault();
                showWelcomeContent();
            }
        });
    }
    
    // Function to show welcome content
    function showWelcomeContent() {
        // Remove active class from all sidebar links
        contentLinks.forEach(l => l.classList.remove('active'));
        
        // Show welcome content, hide dynamic content
        dynamicContent.classList.remove('active');
        welcomeContent.classList.add('active');
        
        // Scroll to top
        const contentArea = document.querySelector('.content-area');
        if (contentArea) {
            contentArea.scrollTo(0, 0);
        }
    }
    
    // Handle dropdown navigation clicks
    const dropdownLinks = document.querySelectorAll('.dropdown-link[data-content]');
    dropdownLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const contentId = this.dataset.content;
            const sidebarLink = document.querySelector('.sidebar [data-content="' + contentId + '"]');
            
            if (sidebarLink) {
                sidebarLink.click();
            }
        });
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (header) {
        if (window.scrollY > 100) {
            header.style.background = 'linear-gradient(135deg, #96ddc0, #7bc49a)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'linear-gradient(135deg, #a8e6cf, #88c999)';
            header.style.backdropFilter = 'none';
        }
    }
});

// Enhanced accessibility: Skip to main content
document.addEventListener('DOMContentLoaded', function() {
    // Create skip link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #2c3e50;
        color: white;
        padding: 8px;
        text-decoration: none;
        z-index: 10000;
        border-radius: 4px;
    `;
    
    skipLink.addEventListener('focus', function() {
        this.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Add id to main content
    const main = document.querySelector('.content-area');
    if (main) {
        main.id = 'main-content';
        main.setAttribute('tabindex', '-1');
    }
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Replace the existing scroll event listener with debounced version
const optimizedScrollHandler = debounce(function() {
    const header = document.querySelector('header');
    if (header) {
        if (window.scrollY > 100) {
            header.style.background = 'linear-gradient(135deg, #96ddc0, #7bc49a)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'linear-gradient(135deg, #a8e6cf, #88c999)';
            header.style.backdropFilter = 'none';
        }
    }
}, 10);

window.addEventListener('scroll', optimizedScrollHandler);

// Console welcome message
console.log('%c📊 Welcome to the Work Portfolio!', 'color: #3498db; font-size: 16px; font-weight: bold;');
console.log('%cExplore our daily progress and weekly achievements!', 'color: #2c3e50; font-size: 12px;');