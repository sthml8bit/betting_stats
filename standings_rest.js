function getStandings() {

	const request = new XMLHttpRequest();
	const url = 'https://api-football-v1.p.rapidapi.com/v2/leagueTable/524';
	request.open("GET", url);
	request.setRequestHeader("x-rapidapi-key", "");
	request.setRequestHeader("x-rapidapi-host", "");
	request.setRequestHeader("useQueryString", true);
	request.send();

	request.onload = (e) => {
    		alert(request.response);
	}



}