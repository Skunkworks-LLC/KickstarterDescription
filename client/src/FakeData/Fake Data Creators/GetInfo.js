var createProject = function() {
	return {
		introduction: {
			id: 0,
			name: '',
			owner: {
				name: '',
				projectsCreated: 0
			},
			photos: '',
			createdAt: '',
			description: '',
			moneyRaised: 0,
			targetGoal: 0,
			backers: 0,
			deadline: 0,
			location: '',
			category: ''
		},
		description: {
			id: 0,
			name: '',
			campaign: {
				about: ''
			},
			comments: [],
			comment: {
				user: '',
				text: '',
				icon: '',
				postTime: '',
				childComments: []
			}
		},
		support: {
			id: 0,
			name: '',
			pledges: [],
			pledge: {
				available: true,
				minimum: 0,
				pledgeTitle: '',
				description: '',
				pledgeRewards: [],
				estimatedShipping: '',
				validLocations: [],
				backers: 0
			}
		}
	}
}

var stripProps = function(project) {
	var newProject = createProject();

	// INTRODUCTION
	newProject.introduction.id = project.id;
	newProject.introduction.name = project.name;
	newProject.introduction.owner = project.creator;
	newProject.introduction.description = project.blurb;
	newProject.introduction.photos = project.photo;
	newProject.introduction.moneyRaised = project.pledged;
	newProject.introduction.targetGoal = project.goal;
	newProject.introduction.backers = project.backers_count;
	newProject.introduction.createdAt = project.created_at;
	newProject.introduction.deadline = project.deadline;
	newProject.introduction.location = project.location.short_name;
	newProject.introduction.category = project.category.name;

	// DESCRIPTION
	newProject.description.id = project.id;
	newProject.description.name = project.name;

	// SUPPORT
	newProject.support.id = project.id;
	newProject.support.name = project.name;
	newProject.support.pledges = project.urls.web.rewards;

	return newProject;
}

var getAllProjects = function(objs) {
	let stuff = [];
	objs.forEach((obj) => {
		stuff.push(stripProps(obj));
	});
	return stuff;
}

var projects123 = getAllProjects(projectsInformation);