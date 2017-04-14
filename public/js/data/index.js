'use strict';

import {
    ajaxRequester as requester
} from "../utils/jquery-ajax-requester.js";

import {
    blogData as blog
} from "./blog.data.js";

let blog = blogData(requester);

export {
	blog
}
