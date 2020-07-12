import React from "react";
import "./css/SearchStyles.css";
import "./js/SearchFunction.js";


const SearchJobs = () => {
	return (
		<div>
			<div id="header">
				<h1>Local Job Postings</h1>
			</div>


			<input type="text" id="search-input" placeholder="Search for local job postings" title="Type in a name"/>

			<ul id="ul-content">
				<li><a href="https://tvdsb.knighthunter.com/JobView.aspx?JID=b756e9df-24fb-4aaf-b567-7eafc53a666d">Thames Valley Education Foundation - Summer Student (London, ON)</a></li>
				<li><a href="https://recruit.uwo.ca/psc/hrprdwebER/EMPLOYEE/HRMS/c/HRS_HRAM_FL.HRS_CG_SEARCH_FL.GBL?Page=HRS_APP_JBPST_FL&Action=U&FOCUS=Applicant&JobOpeningId=20171&SiteId=1&PostingSeq=1&">Rec. Facility Student Attendant</a></li>

				<li><a href="https://ca.indeed.com/viewjob?cmp=London-North-Animal-Hospital&t=Veterinary+Receptionist&jk=3283c13b85462468&vjs=3">Veterinary Receptionist</a></li>
				<li><a href="https://ca.indeed.com/viewjob?cmp=Geraghty-Management&t=Team+Member&jk=9672026caffbb38c&vjs=3">Tim Hortons</a></li>

				<li><a href="https://recruiting.ultipro.ca/HOM5000HLHL/JobBoard/6703244a-ec57-4b7c-8459-3021b0c1c167/OpportunityDetail?opportunityId=b2c3e43c-3b75-4e99-ab1a-70781db91575&sourceId=a94ee69c-1366-444e-b40e-3822e5dc2991">Pool Attendants (Summer Contract) - London</a></li>
			</ul>

		</div>
	);
};

export default SearchJobs;
