const programs = [{
    icon: '<i class="fa fa-users fa-2x"></i>',
    title: 'Network',
    details: 'Network and interact with top industry individuals with many years of experience.',
  },
  
  {
    icon: '<i class="fa fa-rocket fa-2x"></i>',
    title: 'Workshops',
    details: 'Software exhibitions, idea box, hackerton, code fest with so many prices to be won',
  },
  
  {
    icon: '<i class="fa fa-comments-o fa-2x"></i>',
    title: 'Forum',
    details: 'Get opportunity to join forum of great minds, test your intellectual prowess',
  },
  
  {
    icon: '<i class="fa fa-microphone fa-2x"></i>',
    title: 'Talks',
    details: 'Lets talk about security, software development models, object oriented programming, machine learning, data science and so much more',
  },
  
  ];


function getPrograms(program) {
    const programData = ` <div class="program-item">
                            <div class="program-column">
                                ${program.icon}
                            </div>
                            <div class="program-column">
                                <div>${program.title}</div>
                            </div>
                            <div class="program-column">
                               ${program.details}
                            </div>
                        </div>`
                        ;
    return programData;
  }
  
  function showPrograms() {
    let programsBuild = '';
    const programsList = Object.keys(programs);
    const programsListLength = Object.keys(programs).length;
    for (let i = 0; i < programsListLength; i += 1) {
      programsBuild  += getPrograms(programs[programsList[i]]);
    }
    programsSection.innerHTML = programsBuild;
  }

  const programsSection = document.querySelector('.program-main');
  programsSection.onresize = showPrograms();