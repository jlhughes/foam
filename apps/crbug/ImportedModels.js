/**
 * @license
 * Copyright 2012 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Generated by SchemaImport.js from the ROSY discovery document.
// Do not edit.
var GeneratedQIssue = FOAM({
   model_: 'Model',
   name: 'Issue',

   properties:
   [
      {
         model_: 'ReferenceProperty',
         name: 'author',
         subType: 'IssuePerson',
         help: 'Person who originally filed this issue.',
         subType: 'IssuePerson'
      },
      {
         model_: 'StringArrayProperty',
         name: 'blockedOn',
         help: 'References to issues this issue is blocked on.'
      },
      {
         model_: 'StringArrayProperty',
         name: 'blocking',
         help: 'References to issues blocking on this issue.'
      },
      {
         model_: 'StringArrayProperty',
         name: 'cc',
         help: 'List of people who are CC\'ed on updates to this issue.'
      },
      {
         model_: 'DateProperty',
         name: 'closed',
         help: 'Date and time the issue was closed.'
      },
      {
         model_: 'StringProperty',
         name: 'description',
         help: 'Description of the issue.'
      },
      {
         model_: 'IntegerProperty',
         name: 'id',
         help: 'ID of the issue, unique to this project.'
      },
      {
         model_: 'StringArrayProperty',
         name: 'labels',
         help: 'Labels for this issue.'
      },
      {
         model_: 'ReferenceProperty',
         name: 'mergedInto',
         subType: 'Issue',
         help: 'Reference to the issue this issue was merged into.',
         subType: 'Issue'
      },
      {
         model_: 'ReferenceProperty',
         name: 'movedFrom',
         subType: 'Issue',
         help: 'Reference to the issue this issue was moved from.',
         subType: 'Issue'
      },
      {
         model_: 'StringArrayProperty',
         name: 'movedTo',
         help: 'Reference to the issue(s) this issue was moved to.'
      },
      {
         model_: 'ReferenceProperty',
         name: 'owner',
         subType: 'IssuePerson',
         help: 'Person to whom this issue is currently assigned.',
         subType: 'IssuePerson'
      },
      {
         model_: 'DateProperty',
         name: 'published',
         help: 'Date and time the issue was originally published.'
      },
      {
         model_: 'BooleanProperty',
         name: 'starred',
         help: 'Whether the authenticated user has starred this issue.'
      },
      {
         model_: 'IntegerProperty',
         name: 'stars',
         help: 'Number of stars this issue has.'
      },
      {
         model_: 'StringProperty',
         name: 'state',
         help: 'State of this issue (open or closed).'
      },
      {
         model_: 'StringProperty',
         name: 'status',
         help: 'Status of this issue.'
      },
      {
         model_: 'StringProperty',
         name: 'summary',
         help: 'One-line summary of the issue.'
      },
      {
         model_: 'DateProperty',
         name: 'updated',
         help: 'Date and time the issue was last updated.'
      }
   ]
});


var IssueComment = FOAM({
   model_: 'Model',
   name: 'IssueComment',
   properties:
   [
      {
         model_: 'ReferenceProperty',
         help: 'Person who authored this comment.',
         name: 'author',
         subType: 'IssuePerson'
      },
      {
         model_: 'BooleanProperty',
         help: 'Whether the authenticated user can delete this comment.',
         name: 'canDelete'
      },
      {
         model_: 'StringProperty',
         help: 'Content of this issue comment.',
         name: 'content'
      },
      {
         model_: 'ReferenceProperty',
         help: 'Person who deleted this comment.',
         name: 'deletedBy',
         subType: 'IssuePerson'
      },
      {
         model_: 'IntegerProperty',
         help: '0-based sequence number of this comment, unique to this issue.',
         name: 'id'
      },
      {
         model_: 'StringProperty',
         help: 'Comment on an issue tracked by Google Project Hosting.',
         name: 'kind'
      },
      {
         model_: 'DateProperty',
         help: 'Date and time the issue was last updated.',
         name: 'published'
      },
      {
         model_: 'ReferenceProperty',
         name: 'updates',
         subType: 'IssueCommentUpdate'
      }
   ]
});


var IssuePerson = FOAM({
   model_: 'Model',
   name: 'IssuePerson',
   properties:
   [
      {
         model_: 'StringProperty',
         help: 'Link to this user\'s page.',
         name: 'htmlLink'
      },
      {
         model_: 'StringProperty',
         name: 'kind'
      },
      {
         model_: 'StringProperty',
         help: 'User\'s name.',
         name: 'name'
      }
   ]
});


var Project = FOAM({
   "model_": "Model",
   "name": "Project",
   "tableProperties": [
      "description",
      "domain",
      "externalId",
      "htmlLink",
      "issuesConfig",
      "kind",
      "labels",
      "members",
      "name",
      "repositoryUrls",
      "role",
      "summary",
      "versionControlSystem"
   ],
   "properties": [
      {
         "model_": "StringProperty",
         "name": "description",
         "help": "Description of the project."
      },
      {
         "model_": "StringProperty",
         "name": "domain",
         "help": "Domain in which this project exists."
      },
      {
         "model_": "StringProperty",
         "name": "externalId",
         "help": "Single string identifier of the project, encoding the name and domain."
      },
      {
         "model_": "StringProperty",
         "name": "htmlLink",
         "help": "URL of the project home page."
      },
      {
         "model_": "ReferenceProperty",
         "name": "issuesConfig",
         "help": "Information about how issues are handled for this project.",
         "subType": "ProjectIssueConfig"
      },
      {
         "model_": "StringProperty",
         "name": "kind",
         "help": "Project hosted by Google Code Project Hosting."
      },
      {
         "model_": "StringArrayProperty",
         "name": "labels",
         "help": "Labels that have been applied to this project by the project's owners."
      },
      {
         "model_": "StringArrayProperty",
         "name": "members",
         "help": "List of members of this project."
      },
      {
         "model_": "StringProperty",
         "name": "name",
         "help": "Name of the project."
      },
      {
         "model_": "StringArrayProperty",
         "name": "repositoryUrls",
         "help": "URLs where the source for the project can be checked out."
      },
      {
         "model_": "StringProperty",
         "name": "role",
         "help": "The user's role in the project, if there is one."
      },
      {
         "model_": "StringProperty",
         "name": "summary",
         "help": "Short summary of the project."
      },
      {
         "model_": "StringProperty",
         "name": "versionControlSystem",
         "help": "Version control system used by the project."
      }
   ]
});
