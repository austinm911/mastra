// @ts-nocheck
export type openapi = {
  openapi: '3.0.0';
  servers: [
    {
      url: 'https://docs.googleapis.com/';
    },
  ];
  externalDocs: {
    url: 'https://developers.google.com/docs/';
  };
  paths: {
    '/v1/documents': {
      parameters: [
        {
          $ref: '#/components/parameters/_.xgafv';
        },
        {
          $ref: '#/components/parameters/access_token';
        },
        {
          $ref: '#/components/parameters/alt';
        },
        {
          $ref: '#/components/parameters/callback';
        },
        {
          $ref: '#/components/parameters/fields';
        },
        {
          $ref: '#/components/parameters/key';
        },
        {
          $ref: '#/components/parameters/oauth_token';
        },
        {
          $ref: '#/components/parameters/prettyPrint';
        },
        {
          $ref: '#/components/parameters/quotaUser';
        },
        {
          $ref: '#/components/parameters/upload_protocol';
        },
        {
          $ref: '#/components/parameters/uploadType';
        },
      ];
      post: {
        description: 'Creates a blank document using the title given in the request. Other fields in the request, including any provided content, are ignored. Returns the created document.';
        operationId: 'docs.documents.create';
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Document';
              };
            };
          };
        };
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Document';
                };
              };
            };
            description: 'Successful response';
          };
        };
        security: [
          {
            Oauth2: ['https://www.googleapis.com/auth/documents'];
            Oauth2c: ['https://www.googleapis.com/auth/documents'];
          },
          {
            Oauth2: ['https://www.googleapis.com/auth/drive'];
            Oauth2c: ['https://www.googleapis.com/auth/drive'];
          },
          {
            Oauth2: ['https://www.googleapis.com/auth/drive.file'];
            Oauth2c: ['https://www.googleapis.com/auth/drive.file'];
          },
        ];
        tags: ['documents'];
      };
    };
    '/v1/documents/{documentId}': {
      get: {
        description: 'Gets the latest version of the specified document.';
        operationId: 'docs.documents.get';
        parameters: [
          {
            description: 'The ID of the document to retrieve.';
            in: 'path';
            name: 'documentId';
            required: true;
            schema: {
              type: 'string';
            };
          },
          {
            description: 'The suggestions view mode to apply to the document. This allows viewing the document with all suggestions inline, accepted or rejected. If one is not specified, DEFAULT_FOR_CURRENT_ACCESS is used.';
            in: 'query';
            name: 'suggestionsViewMode';
            schema: {
              enum: [
                'DEFAULT_FOR_CURRENT_ACCESS',
                'SUGGESTIONS_INLINE',
                'PREVIEW_SUGGESTIONS_ACCEPTED',
                'PREVIEW_WITHOUT_SUGGESTIONS',
              ];
              type: 'string';
            };
          },
        ];
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Document';
                };
              };
            };
            description: 'Successful response';
          };
        };
        security: [
          {
            Oauth2: ['https://www.googleapis.com/auth/documents'];
            Oauth2c: ['https://www.googleapis.com/auth/documents'];
          },
          {
            Oauth2: ['https://www.googleapis.com/auth/documents.readonly'];
            Oauth2c: ['https://www.googleapis.com/auth/documents.readonly'];
          },
          {
            Oauth2: ['https://www.googleapis.com/auth/drive'];
            Oauth2c: ['https://www.googleapis.com/auth/drive'];
          },
          {
            Oauth2: ['https://www.googleapis.com/auth/drive.file'];
            Oauth2c: ['https://www.googleapis.com/auth/drive.file'];
          },
          {
            Oauth2: ['https://www.googleapis.com/auth/drive.readonly'];
            Oauth2c: ['https://www.googleapis.com/auth/drive.readonly'];
          },
        ];
        tags: ['documents'];
      };
      parameters: [
        {
          $ref: '#/components/parameters/_.xgafv';
        },
        {
          $ref: '#/components/parameters/access_token';
        },
        {
          $ref: '#/components/parameters/alt';
        },
        {
          $ref: '#/components/parameters/callback';
        },
        {
          $ref: '#/components/parameters/fields';
        },
        {
          $ref: '#/components/parameters/key';
        },
        {
          $ref: '#/components/parameters/oauth_token';
        },
        {
          $ref: '#/components/parameters/prettyPrint';
        },
        {
          $ref: '#/components/parameters/quotaUser';
        },
        {
          $ref: '#/components/parameters/upload_protocol';
        },
        {
          $ref: '#/components/parameters/uploadType';
        },
      ];
    };
    '/v1/documents/{documentId}:batchUpdate': {
      parameters: [
        {
          $ref: '#/components/parameters/_.xgafv';
        },
        {
          $ref: '#/components/parameters/access_token';
        },
        {
          $ref: '#/components/parameters/alt';
        },
        {
          $ref: '#/components/parameters/callback';
        },
        {
          $ref: '#/components/parameters/fields';
        },
        {
          $ref: '#/components/parameters/key';
        },
        {
          $ref: '#/components/parameters/oauth_token';
        },
        {
          $ref: '#/components/parameters/prettyPrint';
        },
        {
          $ref: '#/components/parameters/quotaUser';
        },
        {
          $ref: '#/components/parameters/upload_protocol';
        },
        {
          $ref: '#/components/parameters/uploadType';
        },
      ];
      post: {
        description: 'Applies one or more updates to the document. Each request is validated before being applied. If any request is not valid, then the entire request will fail and nothing will be applied. Some requests have replies to give you some information about how they are applied. Other requests do not need to return information; these each return an empty reply. The order of replies matches that of the requests. For example, suppose you call batchUpdate with four updates, and only the third one returns information. The response would have two empty replies, the reply to the third request, and another empty reply, in that order. Because other users may be editing the document, the document might not exactly reflect your changes: your changes may be altered with respect to collaborator changes. If there are no collaborators, the document should reflect your changes. In any case, the updates in your request are guaranteed to be applied together atomically.';
        operationId: 'docs.documents.batchUpdate';
        parameters: [
          {
            description: 'The ID of the document to update.';
            in: 'path';
            name: 'documentId';
            required: true;
            schema: {
              type: 'string';
            };
          },
        ];
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/BatchUpdateDocumentRequest';
              };
            };
          };
        };
        responses: {
          '200': {
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/BatchUpdateDocumentResponse';
                };
              };
            };
            description: 'Successful response';
          };
        };
        security: [
          {
            Oauth2: ['https://www.googleapis.com/auth/documents'];
            Oauth2c: ['https://www.googleapis.com/auth/documents'];
          },
          {
            Oauth2: ['https://www.googleapis.com/auth/drive'];
            Oauth2c: ['https://www.googleapis.com/auth/drive'];
          },
          {
            Oauth2: ['https://www.googleapis.com/auth/drive.file'];
            Oauth2c: ['https://www.googleapis.com/auth/drive.file'];
          },
        ];
        tags: ['documents'];
      };
    };
  };
  components: {
    parameters: {
      '_.xgafv': {
        description: 'V1 error format.';
        in: 'query';
        name: '$.xgafv';
        schema: {
          enum: ['1', '2'];
          type: 'string';
        };
      };
      access_token: {
        description: 'OAuth access token.';
        in: 'query';
        name: 'access_token';
        schema: {
          type: 'string';
        };
      };
      alt: {
        description: 'Data format for response.';
        in: 'query';
        name: 'alt';
        schema: {
          enum: ['json', 'media', 'proto'];
          type: 'string';
        };
      };
      callback: {
        description: 'JSONP';
        in: 'query';
        name: 'callback';
        schema: {
          type: 'string';
        };
      };
      fields: {
        description: 'Selector specifying which fields to include in a partial response.';
        in: 'query';
        name: 'fields';
        schema: {
          type: 'string';
        };
      };
      key: {
        description: 'API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.';
        in: 'query';
        name: 'key';
        schema: {
          type: 'string';
        };
      };
      oauth_token: {
        description: 'OAuth 2.0 token for the current user.';
        in: 'query';
        name: 'oauth_token';
        schema: {
          type: 'string';
        };
      };
      prettyPrint: {
        description: 'Returns response with indentations and line breaks.';
        in: 'query';
        name: 'prettyPrint';
        schema: {
          type: 'boolean';
        };
      };
      quotaUser: {
        description: 'Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.';
        in: 'query';
        name: 'quotaUser';
        schema: {
          type: 'string';
        };
      };
      uploadType: {
        description: 'Legacy upload protocol for media (e.g. "media", "multipart").';
        in: 'query';
        name: 'uploadType';
        schema: {
          type: 'string';
        };
      };
      upload_protocol: {
        description: 'Upload protocol for media (e.g. "raw", "multipart").';
        in: 'query';
        name: 'upload_protocol';
        schema: {
          type: 'string';
        };
      };
    };
    schemas: {
      AutoText: {
        description: "A ParagraphElement representing a spot in the text that's dynamically replaced with content that can change over time, like a page number.";
        properties: {
          suggestedDeletionIds: {
            description: 'The suggested deletion IDs. If empty, then there are no suggested deletions of this content.';
            items: {
              type: 'string';
            };
            type: 'array';
          };
          suggestedInsertionIds: {
            description: "The suggested insertion IDs. An AutoText may have multiple insertion IDs if it's a nested suggested change. If empty, then this is not a suggested insertion.";
            items: {
              type: 'string';
            };
            type: 'array';
          };
          suggestedTextStyleChanges: {
            additionalProperties: {
              $ref: '#/components/schemas/SuggestedTextStyle';
            };
            description: 'The suggested text style changes to this AutoText, keyed by suggestion ID.';
            type: 'object';
          };
          textStyle: {
            $ref: '#/components/schemas/TextStyle';
            description: 'The text style of this AutoText.';
          };
          type: {
            description: 'The type of this auto text.';
            enum: ['TYPE_UNSPECIFIED', 'PAGE_NUMBER', 'PAGE_COUNT'];
            type: 'string';
          };
        };
        type: 'object';
      };
      Background: {
        description: 'Represents the background of a document.';
        properties: {
          color: {
            $ref: '#/components/schemas/OptionalColor';
            description: 'The background color.';
          };
        };
        type: 'object';
      };
      BackgroundSuggestionState: {
        description: 'A mask that indicates which of the fields on the base Background have been changed in this suggestion. For any field set to true, the Backgound has a new suggested value.';
        properties: {
          backgroundColorSuggested: {
            description: 'Indicates whether the current background color has been modified in this suggestion.';
            type: 'boolean';
          };
        };
        type: 'object';
      };
      BatchUpdateDocumentRequest: {
        description: 'Request message for BatchUpdateDocument.';
        properties: {
          requests: {
            description: 'A list of updates to apply to the document.';
            items: {
              $ref: '#/components/schemas/Request';
            };
            type: 'array';
          };
          writeControl: {
            $ref: '#/components/schemas/WriteControl';
            description: 'Provides control over how write requests are executed.';
          };
        };
        type: 'object';
      };
      BatchUpdateDocumentResponse: {
        description: 'Response message from a BatchUpdateDocument request.';
        properties: {
          documentId: {
            description: 'The ID of the document to which the updates were applied to.';
            type: 'string';
          };
          replies: {
            description: 'The reply of the updates. This maps 1:1 with the updates, although replies to some requests may be empty.';
            items: {
              $ref: '#/components/schemas/Response';
            };
            type: 'array';
          };
          writeControl: {
            $ref: '#/components/schemas/WriteControl';
            description: 'The updated write control after applying the request.';
          };
        };
        type: 'object';
      };
      Body: {
        description: 'The document body. The body typically contains the full document contents except for headers, footers, and footnotes.';
        properties: {
          content: {
            description: "The contents of the body. The indexes for the body's content begin at zero.";
            items: {
              $ref: '#/components/schemas/StructuralElement';
            };
            type: 'array';
          };
        };
        type: 'object';
      };
      Bullet: {
        description: 'Describes the bullet of a paragraph.';
        properties: {
          listId: {
            description: 'The ID of the list this paragraph belongs to.';
            type: 'string';
          };
          nestingLevel: {
            description: 'The nesting level of this paragraph in the list.';
            format: 'int32';
            type: 'integer';
          };
          textStyle: {
            $ref: '#/components/schemas/TextStyle';
            description: 'The paragraph-specific text style applied to this bullet.';
          };
        };
        type: 'object';
      };
      BulletSuggestionState: {
        description: "A mask that indicates which of the fields on the base Bullet have been changed in this suggestion. For any field set to true, there's a new suggested value.";
        properties: {
          listIdSuggested: {
            description: 'Indicates if there was a suggested change to the list_id.';
            type: 'boolean';
          };
          nestingLevelSuggested: {
            description: 'Indicates if there was a suggested change to the nesting_level.';
            type: 'boolean';
          };
          textStyleSuggestionState: {
            $ref: '#/components/schemas/TextStyleSuggestionState';
            description: 'A mask that indicates which of the fields in text style have been changed in this suggestion.';
          };
        };
        type: 'object';
      };
      Color: {
        description: 'A solid color.';
        properties: {
          rgbColor: {
            $ref: '#/components/schemas/RgbColor';
            description: 'The RGB color value.';
          };
        };
        type: 'object';
      };
      ColumnBreak: {
        description: 'A ParagraphElement representing a column break. A column break makes the subsequent text start at the top of the next column.';
        properties: {
          suggestedDeletionIds: {
            description: 'The suggested deletion IDs. If empty, then there are no suggested deletions of this content.';
            items: {
              type: 'string';
            };
            type: 'array';
          };
          suggestedInsertionIds: {
            description: "The suggested insertion IDs. A ColumnBreak may have multiple insertion IDs if it's a nested suggested change. If empty, then this is not a suggested insertion.";
            items: {
              type: 'string';
            };
            type: 'array';
          };
          suggestedTextStyleChanges: {
            additionalProperties: {
              $ref: '#/components/schemas/SuggestedTextStyle';
            };
            description: 'The suggested text style changes to this ColumnBreak, keyed by suggestion ID.';
            type: 'object';
          };
          textStyle: {
            $ref: '#/components/schemas/TextStyle';
            description: 'The text style of this ColumnBreak. Similar to text content, like text runs and footnote references, the text style of a column break can affect content layout as well as the styling of text inserted next to it.';
          };
        };
        type: 'object';
      };
      CreateFooterRequest: {
        description: 'Creates a Footer. The new footer is applied to the SectionStyle at the location of the SectionBreak if specified, otherwise it is applied to the DocumentStyle. If a footer of the specified type already exists, a 400 bad request error is returned.';
        properties: {
          sectionBreakLocation: {
            $ref: '#/components/schemas/Location';
            description: 'The location of the SectionBreak immediately preceding the section whose SectionStyle this footer should belong to. If this is unset or refers to the first section break in the document, the footer applies to the document style.';
          };
          type: {
            description: 'The type of footer to create.';
            enum: ['HEADER_FOOTER_TYPE_UNSPECIFIED', 'DEFAULT'];
            type: 'string';
          };
        };
        type: 'object';
      };
      CreateFooterResponse: {
        description: 'The result of creating a footer.';
        properties: {
          footerId: {
            description: 'The ID of the created footer.';
            type: 'string';
          };
        };
        type: 'object';
      };
      CreateFootnoteRequest: {
        description: 'Creates a Footnote segment and inserts a new FootnoteReference to it at the given location. The new Footnote segment will contain a space followed by a newline character.';
        properties: {
          endOfSegmentLocation: {
            $ref: '#/components/schemas/EndOfSegmentLocation';
            description: 'Inserts the footnote reference at the end of the document body. Footnote references cannot be inserted inside a header, footer or footnote. Since footnote references can only be inserted in the body, the segment ID field must be empty.';
          };
          location: {
            $ref: '#/components/schemas/Location';
            description: "Inserts the footnote reference at a specific index in the document. The footnote reference must be inserted inside the bounds of an existing Paragraph. For instance, it cannot be inserted at a table's start index (i.e. between the table and its preceding paragraph). Footnote references cannot be inserted inside an equation, header, footer or footnote. Since footnote references can only be inserted in the body, the segment ID field must be empty.";
          };
        };
        type: 'object';
      };
      CreateFootnoteResponse: {
        description: 'The result of creating a footnote.';
        properties: {
          footnoteId: {
            description: 'The ID of the created footnote.';
            type: 'string';
          };
        };
        type: 'object';
      };
      CreateHeaderRequest: {
        description: 'Creates a Header. The new header is applied to the SectionStyle at the location of the SectionBreak if specified, otherwise it is applied to the DocumentStyle. If a header of the specified type already exists, a 400 bad request error is returned.';
        properties: {
          sectionBreakLocation: {
            $ref: '#/components/schemas/Location';
            description: "The location of the SectionBreak which begins the section this header should belong to. If `section_break_location' is unset or if it refers to the first section break in the document body, the header applies to the DocumentStyle";
          };
          type: {
            description: 'The type of header to create.';
            enum: ['HEADER_FOOTER_TYPE_UNSPECIFIED', 'DEFAULT'];
            type: 'string';
          };
        };
        type: 'object';
      };
      CreateHeaderResponse: {
        description: 'The result of creating a header.';
        properties: {
          headerId: {
            description: 'The ID of the created header.';
            type: 'string';
          };
        };
        type: 'object';
      };
      CreateNamedRangeRequest: {
        description: 'Creates a NamedRange referencing the given range.';
        properties: {
          name: {
            description: 'The name of the NamedRange. Names do not need to be unique. Names must be at least 1 character and no more than 256 characters, measured in UTF-16 code units.';
            type: 'string';
          };
          range: {
            $ref: '#/components/schemas/Range';
            description: 'The range to apply the name to.';
          };
        };
        type: 'object';
      };
      CreateNamedRangeResponse: {
        description: 'The result of creating a named range.';
        properties: {
          namedRangeId: {
            description: 'The ID of the created named range.';
            type: 'string';
          };
        };
        type: 'object';
      };
      CreateParagraphBulletsRequest: {
        description: 'Creates bullets for all of the paragraphs that overlap with the given range. The nesting level of each paragraph will be determined by counting leading tabs in front of each paragraph. To avoid excess space between the bullet and the corresponding paragraph, these leading tabs are removed by this request. This may change the indices of parts of the text. If the paragraph immediately before paragraphs being updated is in a list with a matching preset, the paragraphs being updated are added to that preceding list.';
        properties: {
          bulletPreset: {
            description: 'The kinds of bullet glyphs to be used.';
            enum: [
              'BULLET_GLYPH_PRESET_UNSPECIFIED',
              'BULLET_DISC_CIRCLE_SQUARE',
              'BULLET_DIAMONDX_ARROW3D_SQUARE',
              'BULLET_CHECKBOX',
              'BULLET_ARROW_DIAMOND_DISC',
              'BULLET_STAR_CIRCLE_SQUARE',
              'BULLET_ARROW3D_CIRCLE_SQUARE',
              'BULLET_LEFTTRIANGLE_DIAMOND_DISC',
              'BULLET_DIAMONDX_HOLLOWDIAMOND_SQUARE',
              'BULLET_DIAMOND_CIRCLE_SQUARE',
              'NUMBERED_DECIMAL_ALPHA_ROMAN',
              'NUMBERED_DECIMAL_ALPHA_ROMAN_PARENS',
              'NUMBERED_DECIMAL_NESTED',
              'NUMBERED_UPPERALPHA_ALPHA_ROMAN',
              'NUMBERED_UPPERROMAN_UPPERALPHA_DECIMAL',
              'NUMBERED_ZERODECIMAL_ALPHA_ROMAN',
            ];
            type: 'string';
          };
          range: {
            $ref: '#/components/schemas/Range';
            description: 'The range to apply the bullet preset to.';
          };
        };
        type: 'object';
      };
      CropProperties: {
        description: "The crop properties of an image. The crop rectangle is represented using fractional offsets from the original content's 4 edges. - If the offset is in the interval (0, 1), the corresponding edge of crop rectangle is positioned inside of the image's original bounding rectangle. - If the offset is negative or greater than 1, the corresponding edge of crop rectangle is positioned outside of the image's original bounding rectangle. - If all offsets and rotation angle are 0, the image is not cropped.";
        properties: {
          angle: {
            description: 'The clockwise rotation angle of the crop rectangle around its center, in radians. Rotation is applied after the offsets.';
            format: 'float';
            type: 'number';
          };
          offsetBottom: {
            description: "The offset specifies how far inwards the bottom edge of the crop rectangle is from the bottom edge of the original content as a fraction of the original content's height.";
            format: 'float';
            type: 'number';
          };
          offsetLeft: {
            description: "The offset specifies how far inwards the left edge of the crop rectangle is from the left edge of the original content as a fraction of the original content's width.";
            format: 'float';
            type: 'number';
          };
          offsetRight: {
            description: "The offset specifies how far inwards the right edge of the crop rectangle is from the right edge of the original content as a fraction of the original content's width.";
            format: 'float';
            type: 'number';
          };
          offsetTop: {
            description: "The offset specifies how far inwards the top edge of the crop rectangle is from the top edge of the original content as a fraction of the original content's height.";
            format: 'float';
            type: 'number';
          };
        };
        type: 'object';
      };
      CropPropertiesSuggestionState: {
        description: "A mask that indicates which of the fields on the base CropProperties have been changed in this suggestion. For any field set to true, there's a new suggested value.";
        properties: {
          angleSuggested: {
            description: 'Indicates if there was a suggested change to angle.';
            type: 'boolean';
          };
          offsetBottomSuggested: {
            description: 'Indicates if there was a suggested change to offset_bottom.';
            type: 'boolean';
          };
          offsetLeftSuggested: {
            description: 'Indicates if there was a suggested change to offset_left.';
            type: 'boolean';
          };
          offsetRightSuggested: {
            description: 'Indicates if there was a suggested change to offset_right.';
            type: 'boolean';
          };
          offsetTopSuggested: {
            description: 'Indicates if there was a suggested change to offset_top.';
            type: 'boolean';
          };
        };
        type: 'object';
      };
      DeleteContentRangeRequest: {
        description: 'Deletes content from the document.';
        properties: {
          range: {
            $ref: '#/components/schemas/Range';
            description: 'The range of content to delete. Deleting text that crosses a paragraph boundary may result in changes to paragraph styles, lists, positioned objects and bookmarks as the two paragraphs are merged. Attempting to delete certain ranges can result in an invalid document structure in which case a 400 bad request error is returned. Some examples of invalid delete requests include: * Deleting one code unit of a surrogate pair. * Deleting the last newline character of a Body, Header, Footer, Footnote, TableCell or TableOfContents. * Deleting the start or end of a Table, TableOfContents or Equation without deleting the entire element. * Deleting the newline character before a Table, TableOfContents or SectionBreak without deleting the element. * Deleting individual rows or cells of a table. Deleting the content within a table cell is allowed.';
          };
        };
        type: 'object';
      };
      DeleteFooterRequest: {
        description: 'Deletes a Footer from the document.';
        properties: {
          footerId: {
            description: 'The id of the footer to delete. If this footer is defined on DocumentStyle, the reference to this footer is removed, resulting in no footer of that type for the first section of the document. If this footer is defined on a SectionStyle, the reference to this footer is removed and the footer of that type is now continued from the previous section.';
            type: 'string';
          };
        };
        type: 'object';
      };
      DeleteHeaderRequest: {
        description: 'Deletes a Header from the document.';
        properties: {
          headerId: {
            description: 'The id of the header to delete. If this header is defined on DocumentStyle, the reference to this header is removed, resulting in no header of that type for the first section of the document. If this header is defined on a SectionStyle, the reference to this header is removed and the header of that type is now continued from the previous section.';
            type: 'string';
          };
        };
        type: 'object';
      };
      DeleteNamedRangeRequest: {
        description: 'Deletes a NamedRange.';
        properties: {
          name: {
            description: 'The name of the range(s) to delete. All named ranges with the given name will be deleted.';
            type: 'string';
          };
          namedRangeId: {
            description: 'The ID of the named range to delete.';
            type: 'string';
          };
        };
        type: 'object';
      };
      DeleteParagraphBulletsRequest: {
        description: 'Deletes bullets from all of the paragraphs that overlap with the given range. The nesting level of each paragraph will be visually preserved by adding indent to the start of the corresponding paragraph.';
        properties: {
          range: {
            $ref: '#/components/schemas/Range';
            description: 'The range to delete bullets from.';
          };
        };
        type: 'object';
      };
      DeletePositionedObjectRequest: {
        description: 'Deletes a PositionedObject from the document.';
        properties: {
          objectId: {
            description: 'The ID of the positioned object to delete.';
            type: 'string';
          };
        };
        type: 'object';
      };
      DeleteTableColumnRequest: {
        description: 'Deletes a column from a table.';
        properties: {
          tableCellLocation: {
            $ref: '#/components/schemas/TableCellLocation';
            description: 'The reference table cell location from which the column will be deleted. The column this cell spans will be deleted. If this is a merged cell that spans multiple columns, all columns that the cell spans will be deleted. If no columns remain in the table after this deletion, the whole table is deleted.';
          };
        };
        type: 'object';
      };
      DeleteTableRowRequest: {
        description: 'Deletes a row from a table.';
        properties: {
          tableCellLocation: {
            $ref: '#/components/schemas/TableCellLocation';
            description: 'The reference table cell location from which the row will be deleted. The row this cell spans will be deleted. If this is a merged cell that spans multiple rows, all rows that the cell spans will be deleted. If no rows remain in the table after this deletion, the whole table is deleted.';
          };
        };
        type: 'object';
      };
      Dimension: {
        description: 'A magnitude in a single direction in the specified units.';
        properties: {
          magnitude: {
            description: 'The magnitude.';
            format: 'double';
            type: 'number';
          };
          unit: {
            description: 'The units for magnitude.';
            enum: ['UNIT_UNSPECIFIED', 'PT'];
            type: 'string';
          };
        };
        type: 'object';
      };
      Document: {
        description: 'A Google Docs document.';
        properties: {
          body: {
            $ref: '#/components/schemas/Body';
            description: 'Output only. The main body of the document.';
          };
          documentId: {
            description: 'Output only. The ID of the document.';
            type: 'string';
          };
          documentStyle: {
            $ref: '#/components/schemas/DocumentStyle';
            description: 'Output only. The style of the document.';
          };
          footers: {
            additionalProperties: {
              $ref: '#/components/schemas/Footer';
            };
            description: 'Output only. The footers in the document, keyed by footer ID.';
            type: 'object';
          };
          footnotes: {
            additionalProperties: {
              $ref: '#/components/schemas/Footnote';
            };
            description: 'Output only. The footnotes in the document, keyed by footnote ID.';
            type: 'object';
          };
          headers: {
            additionalProperties: {
              $ref: '#/components/schemas/Header';
            };
            description: 'Output only. The headers in the document, keyed by header ID.';
            type: 'object';
          };
          inlineObjects: {
            additionalProperties: {
              $ref: '#/components/schemas/InlineObject';
            };
            description: 'Output only. The inline objects in the document, keyed by object ID.';
            type: 'object';
          };
          lists: {
            additionalProperties: {
              $ref: '#/components/schemas/List';
            };
            description: 'Output only. The lists in the document, keyed by list ID.';
            type: 'object';
          };
          namedRanges: {
            additionalProperties: {
              $ref: '#/components/schemas/NamedRanges';
            };
            description: 'Output only. The named ranges in the document, keyed by name.';
            type: 'object';
          };
          namedStyles: {
            $ref: '#/components/schemas/NamedStyles';
            description: 'Output only. The named styles of the document.';
          };
          positionedObjects: {
            additionalProperties: {
              $ref: '#/components/schemas/PositionedObject';
            };
            description: 'Output only. The positioned objects in the document, keyed by object ID.';
            type: 'object';
          };
          revisionId: {
            description: 'Output only. The revision ID of the document. Can be used in update requests to specify which revision of a document to apply updates to and how the request should behave if the document has been edited since that revision. Only populated if the user has edit access to the document. The revision ID is not a sequential number but an opaque string. The format of the revision ID might change over time. A returned revision ID is only guaranteed to be valid for 24 hours after it has been returned and cannot be shared across users. If the revision ID is unchanged between calls, then the document has not changed. Conversely, a changed ID (for the same document and user) usually means the document has been updated. However, a changed ID can also be due to internal factors such as ID format changes.';
            type: 'string';
          };
          suggestedDocumentStyleChanges: {
            additionalProperties: {
              $ref: '#/components/schemas/SuggestedDocumentStyle';
            };
            description: 'Output only. The suggested changes to the style of the document, keyed by suggestion ID.';
            type: 'object';
          };
          suggestedNamedStylesChanges: {
            additionalProperties: {
              $ref: '#/components/schemas/SuggestedNamedStyles';
            };
            description: 'Output only. The suggested changes to the named styles of the document, keyed by suggestion ID.';
            type: 'object';
          };
          suggestionsViewMode: {
            description: 'Output only. The suggestions view mode applied to the document. Note: When editing a document, changes must be based on a document with SUGGESTIONS_INLINE.';
            enum: [
              'DEFAULT_FOR_CURRENT_ACCESS',
              'SUGGESTIONS_INLINE',
              'PREVIEW_SUGGESTIONS_ACCEPTED',
              'PREVIEW_WITHOUT_SUGGESTIONS',
            ];
            type: 'string';
          };
          title: {
            description: 'The title of the document.';
            type: 'string';
          };
        };
        type: 'object';
      };
      DocumentStyle: {
        description: 'The style of the document.';
        properties: {
          background: {
            $ref: '#/components/schemas/Background';
            description: 'The background of the document. Documents cannot have a transparent background color.';
          };
          defaultFooterId: {
            description: "The ID of the default footer. If not set, there's no default footer. This property is read-only.";
            type: 'string';
          };
          defaultHeaderId: {
            description: "The ID of the default header. If not set, there's no default header. This property is read-only.";
            type: 'string';
          };
          evenPageFooterId: {
            description: "The ID of the footer used only for even pages. The value of use_even_page_header_footer determines whether to use the default_footer_id or this value for the footer on even pages. If not set, there's no even page footer. This property is read-only.";
            type: 'string';
          };
          evenPageHeaderId: {
            description: "The ID of the header used only for even pages. The value of use_even_page_header_footer determines whether to use the default_header_id or this value for the header on even pages. If not set, there's no even page header. This property is read-only.";
            type: 'string';
          };
          firstPageFooterId: {
            description: "The ID of the footer used only for the first page. If not set then a unique footer for the first page does not exist. The value of use_first_page_header_footer determines whether to use the default_footer_id or this value for the footer on the first page. If not set, there's no first page footer. This property is read-only.";
            type: 'string';
          };
          firstPageHeaderId: {
            description: "The ID of the header used only for the first page. If not set then a unique header for the first page does not exist. The value of use_first_page_header_footer determines whether to use the default_header_id or this value for the header on the first page. If not set, there's no first page header. This property is read-only.";
            type: 'string';
          };
          flipPageOrientation: {
            description: 'Optional. Indicates whether to flip the dimensions of the page_size, which allows changing the page orientation between portrait and landscape.';
            type: 'boolean';
          };
          marginBottom: {
            $ref: '#/components/schemas/Dimension';
            description: 'The bottom page margin. Updating the bottom page margin on the document style clears the bottom page margin on all section styles.';
          };
          marginFooter: {
            $ref: '#/components/schemas/Dimension';
            description: 'The amount of space between the bottom of the page and the contents of the footer.';
          };
          marginHeader: {
            $ref: '#/components/schemas/Dimension';
            description: 'The amount of space between the top of the page and the contents of the header.';
          };
          marginLeft: {
            $ref: '#/components/schemas/Dimension';
            description: 'The left page margin. Updating the left page margin on the document style clears the left page margin on all section styles. It may also cause columns to resize in all sections.';
          };
          marginRight: {
            $ref: '#/components/schemas/Dimension';
            description: 'The right page margin. Updating the right page margin on the document style clears the right page margin on all section styles. It may also cause columns to resize in all sections.';
          };
          marginTop: {
            $ref: '#/components/schemas/Dimension';
            description: 'The top page margin. Updating the top page margin on the document style clears the top page margin on all section styles.';
          };
          pageNumberStart: {
            description: 'The page number from which to start counting the number of pages.';
            format: 'int32';
            type: 'integer';
          };
          pageSize: {
            $ref: '#/components/schemas/Size';
            description: 'The size of a page in the document.';
          };
          useCustomHeaderFooterMargins: {
            description: 'Indicates whether DocumentStyle margin_header, SectionStyle margin_header and DocumentStyle margin_footer, SectionStyle margin_footer are respected. When false, the default values in the Docs editor for header and footer margin are used. This property is read-only.';
            type: 'boolean';
          };
          useEvenPageHeaderFooter: {
            description: 'Indicates whether to use the even page header / footer IDs for the even pages.';
            type: 'boolean';
          };
          useFirstPageHeaderFooter: {
            description: 'Indicates whether to use the first page header / footer IDs for the first page.';
            type: 'boolean';
          };
        };
        type: 'object';
      };
      DocumentStyleSuggestionState: {
        description: "A mask that indicates which of the fields on the base DocumentStyle have been changed in this suggestion. For any field set to true, there's a new suggested value.";
        properties: {
          backgroundSuggestionState: {
            $ref: '#/components/schemas/BackgroundSuggestionState';
            description: 'A mask that indicates which of the fields in background have been changed in this suggestion.';
          };
          defaultFooterIdSuggested: {
            description: 'Indicates if there was a suggested change to default_footer_id.';
            type: 'boolean';
          };
          defaultHeaderIdSuggested: {
            description: 'Indicates if there was a suggested change to default_header_id.';
            type: 'boolean';
          };
          evenPageFooterIdSuggested: {
            description: 'Indicates if there was a suggested change to even_page_footer_id.';
            type: 'boolean';
          };
          evenPageHeaderIdSuggested: {
            description: 'Indicates if there was a suggested change to even_page_header_id.';
            type: 'boolean';
          };
          firstPageFooterIdSuggested: {
            description: 'Indicates if there was a suggested change to first_page_footer_id.';
            type: 'boolean';
          };
          firstPageHeaderIdSuggested: {
            description: 'Indicates if there was a suggested change to first_page_header_id.';
            type: 'boolean';
          };
          flipPageOrientationSuggested: {
            description: 'Optional. Indicates if there was a suggested change to flip_page_orientation.';
            type: 'boolean';
          };
          marginBottomSuggested: {
            description: 'Indicates if there was a suggested change to margin_bottom.';
            type: 'boolean';
          };
          marginFooterSuggested: {
            description: 'Indicates if there was a suggested change to margin_footer.';
            type: 'boolean';
          };
          marginHeaderSuggested: {
            description: 'Indicates if there was a suggested change to margin_header.';
            type: 'boolean';
          };
          marginLeftSuggested: {
            description: 'Indicates if there was a suggested change to margin_left.';
            type: 'boolean';
          };
          marginRightSuggested: {
            description: 'Indicates if there was a suggested change to margin_right.';
            type: 'boolean';
          };
          marginTopSuggested: {
            description: 'Indicates if there was a suggested change to margin_top.';
            type: 'boolean';
          };
          pageNumberStartSuggested: {
            description: 'Indicates if there was a suggested change to page_number_start.';
            type: 'boolean';
          };
          pageSizeSuggestionState: {
            $ref: '#/components/schemas/SizeSuggestionState';
            description: 'A mask that indicates which of the fields in size have been changed in this suggestion.';
          };
          useCustomHeaderFooterMarginsSuggested: {
            description: 'Indicates if there was a suggested change to use_custom_header_footer_margins.';
            type: 'boolean';
          };
          useEvenPageHeaderFooterSuggested: {
            description: 'Indicates if there was a suggested change to use_even_page_header_footer.';
            type: 'boolean';
          };
          useFirstPageHeaderFooterSuggested: {
            description: 'Indicates if there was a suggested change to use_first_page_header_footer.';
            type: 'boolean';
          };
        };
        type: 'object';
      };
      EmbeddedDrawingProperties: {
        description: "The properties of an embedded drawing and used to differentiate the object type. An embedded drawing is one that's created and edited within a document. Note that extensive details are not supported.";
        properties: {};
        type: 'object';
      };
      EmbeddedDrawingPropertiesSuggestionState: {
        description: "A mask that indicates which of the fields on the base EmbeddedDrawingProperties have been changed in this suggestion. For any field set to true, there's a new suggested value.";
        properties: {};
        type: 'object';
      };
      EmbeddedObject: {
        description: 'An embedded object in the document.';
        properties: {
          description: {
            description: 'The description of the embedded object. The `title` and `description` are both combined to display alt text.';
            type: 'string';
          };
          embeddedDrawingProperties: {
            $ref: '#/components/schemas/EmbeddedDrawingProperties';
            description: 'The properties of an embedded drawing.';
          };
          embeddedObjectBorder: {
            $ref: '#/components/schemas/EmbeddedObjectBorder';
            description: 'The border of the embedded object.';
          };
          imageProperties: {
            $ref: '#/components/schemas/ImageProperties';
            description: 'The properties of an image.';
          };
          linkedContentReference: {
            $ref: '#/components/schemas/LinkedContentReference';
            description: 'A reference to the external linked source content. For example, it contains a reference to the source Google Sheets chart when the embedded object is a linked chart. If unset, then the embedded object is not linked.';
          };
          marginBottom: {
            $ref: '#/components/schemas/Dimension';
            description: 'The bottom margin of the embedded object.';
          };
          marginLeft: {
            $ref: '#/components/schemas/Dimension';
            description: 'The left margin of the embedded object.';
          };
          marginRight: {
            $ref: '#/components/schemas/Dimension';
            description: 'The right margin of the embedded object.';
          };
          marginTop: {
            $ref: '#/components/schemas/Dimension';
            description: 'The top margin of the embedded object.';
          };
          size: {
            $ref: '#/components/schemas/Size';
            description: 'The visible size of the image after cropping.';
          };
          title: {
            description: 'The title of the embedded object. The `title` and `description` are both combined to display alt text.';
            type: 'string';
          };
        };
        type: 'object';
      };
      EmbeddedObjectBorder: {
        description: 'A border around an EmbeddedObject.';
        properties: {
          color: {
            $ref: '#/components/schemas/OptionalColor';
            description: 'The color of the border.';
          };
          dashStyle: {
            description: 'The dash style of the border.';
            enum: ['DASH_STYLE_UNSPECIFIED', 'SOLID', 'DOT', 'DASH'];
            type: 'string';
          };
          propertyState: {
            description: 'The property state of the border property.';
            enum: ['RENDERED', 'NOT_RENDERED'];
            type: 'string';
          };
          width: {
            $ref: '#/components/schemas/Dimension';
            description: 'The width of the border.';
          };
        };
        type: 'object';
      };
      EmbeddedObjectBorderSuggestionState: {
        description: "A mask that indicates which of the fields on the base EmbeddedObjectBorder have been changed in this suggestion. For any field set to true, there's a new suggested value.";
        properties: {
          colorSuggested: {
            description: 'Indicates if there was a suggested change to color.';
            type: 'boolean';
          };
          dashStyleSuggested: {
            description: 'Indicates if there was a suggested change to dash_style.';
            type: 'boolean';
          };
          propertyStateSuggested: {
            description: 'Indicates if there was a suggested change to property_state.';
            type: 'boolean';
          };
          widthSuggested: {
            description: 'Indicates if there was a suggested change to width.';
            type: 'boolean';
          };
        };
        type: 'object';
      };
      EmbeddedObjectSuggestionState: {
        description: "A mask that indicates which of the fields on the base EmbeddedObject have been changed in this suggestion. For any field set to true, there's a new suggested value.";
        properties: {
          descriptionSuggested: {
            description: 'Indicates if there was a suggested change to description.';
            type: 'boolean';
          };
          embeddedDrawingPropertiesSuggestionState: {
            $ref: '#/components/schemas/EmbeddedDrawingPropertiesSuggestionState';
            description: 'A mask that indicates which of the fields in embedded_drawing_properties have been changed in this suggestion.';
          };
          embeddedObjectBorderSuggestionState: {
            $ref: '#/components/schemas/EmbeddedObjectBorderSuggestionState';
            description: 'A mask that indicates which of the fields in embedded_object_border have been changed in this suggestion.';
          };
          imagePropertiesSuggestionState: {
            $ref: '#/components/schemas/ImagePropertiesSuggestionState';
            description: 'A mask that indicates which of the fields in image_properties have been changed in this suggestion.';
          };
          linkedContentReferenceSuggestionState: {
            $ref: '#/components/schemas/LinkedContentReferenceSuggestionState';
            description: 'A mask that indicates which of the fields in linked_content_reference have been changed in this suggestion.';
          };
          marginBottomSuggested: {
            description: 'Indicates if there was a suggested change to margin_bottom.';
            type: 'boolean';
          };
          marginLeftSuggested: {
            description: 'Indicates if there was a suggested change to margin_left.';
            type: 'boolean';
          };
          marginRightSuggested: {
            description: 'Indicates if there was a suggested change to margin_right.';
            type: 'boolean';
          };
          marginTopSuggested: {
            description: 'Indicates if there was a suggested change to margin_top.';
            type: 'boolean';
          };
          sizeSuggestionState: {
            $ref: '#/components/schemas/SizeSuggestionState';
            description: 'A mask that indicates which of the fields in size have been changed in this suggestion.';
          };
          titleSuggested: {
            description: 'Indicates if there was a suggested change to title.';
            type: 'boolean';
          };
        };
        type: 'object';
      };
      EndOfSegmentLocation: {
        description: 'Location at the end of a body, header, footer or footnote. The location is immediately before the last newline in the document segment.';
        properties: {
          segmentId: {
            description: "The ID of the header, footer or footnote the location is in. An empty segment ID signifies the document's body.";
            type: 'string';
          };
        };
        type: 'object';
      };
      Equation: {
        description: 'A ParagraphElement representing an equation.';
        properties: {
          suggestedDeletionIds: {
            description: 'The suggested deletion IDs. If empty, then there are no suggested deletions of this content.';
            items: {
              type: 'string';
            };
            type: 'array';
          };
          suggestedInsertionIds: {
            description: "The suggested insertion IDs. An Equation may have multiple insertion IDs if it's a nested suggested change. If empty, then this is not a suggested insertion.";
            items: {
              type: 'string';
            };
            type: 'array';
          };
        };
        type: 'object';
      };
      Footer: {
        description: 'A document footer.';
        properties: {
          content: {
            description: "The contents of the footer. The indexes for a footer's content begin at zero.";
            items: {
              $ref: '#/components/schemas/StructuralElement';
            };
            type: 'array';
          };
          footerId: {
            description: 'The ID of the footer.';
            type: 'string';
          };
        };
        type: 'object';
      };
      Footnote: {
        description: 'A document footnote.';
        properties: {
          content: {
            description: "The contents of the footnote. The indexes for a footnote's content begin at zero.";
            items: {
              $ref: '#/components/schemas/StructuralElement';
            };
            type: 'array';
          };
          footnoteId: {
            description: 'The ID of the footnote.';
            type: 'string';
          };
        };
        type: 'object';
      };
      FootnoteReference: {
        description: 'A ParagraphElement representing a footnote reference. A footnote reference is the inline content rendered with a number and is used to identify the footnote.';
        properties: {
          footnoteId: {
            description: 'The ID of the footnote that contains the content of this footnote reference.';
            type: 'string';
          };
          footnoteNumber: {
            description: 'The rendered number of this footnote.';
            type: 'string';
          };
          suggestedDeletionIds: {
            description: 'The suggested deletion IDs. If empty, then there are no suggested deletions of this content.';
            items: {
              type: 'string';
            };
            type: 'array';
          };
          suggestedInsertionIds: {
            description: "The suggested insertion IDs. A FootnoteReference may have multiple insertion IDs if it's a nested suggested change. If empty, then this is not a suggested insertion.";
            items: {
              type: 'string';
            };
            type: 'array';
          };
          suggestedTextStyleChanges: {
            additionalProperties: {
              $ref: '#/components/schemas/SuggestedTextStyle';
            };
            description: 'The suggested text style changes to this FootnoteReference, keyed by suggestion ID.';
            type: 'object';
          };
          textStyle: {
            $ref: '#/components/schemas/TextStyle';
            description: 'The text style of this FootnoteReference.';
          };
        };
        type: 'object';
      };
      Header: {
        description: 'A document header.';
        properties: {
          content: {
            description: "The contents of the header. The indexes for a header's content begin at zero.";
            items: {
              $ref: '#/components/schemas/StructuralElement';
            };
            type: 'array';
          };
          headerId: {
            description: 'The ID of the header.';
            type: 'string';
          };
        };
        type: 'object';
      };
      HorizontalRule: {
        description: 'A ParagraphElement representing a horizontal line.';
        properties: {
          suggestedDeletionIds: {
            description: 'The suggested deletion IDs. If empty, then there are no suggested deletions of this content.';
            items: {
              type: 'string';
            };
            type: 'array';
          };
          suggestedInsertionIds: {
            description: 'The suggested insertion IDs. A HorizontalRule may have multiple insertion IDs if it is a nested suggested change. If empty, then this is not a suggested insertion.';
            items: {
              type: 'string';
            };
            type: 'array';
          };
          suggestedTextStyleChanges: {
            additionalProperties: {
              $ref: '#/components/schemas/SuggestedTextStyle';
            };
            description: 'The suggested text style changes to this HorizontalRule, keyed by suggestion ID.';
            type: 'object';
          };
          textStyle: {
            $ref: '#/components/schemas/TextStyle';
            description: 'The text style of this HorizontalRule. Similar to text content, like text runs and footnote references, the text style of a horizontal rule can affect content layout as well as the styling of text inserted next to it.';
          };
        };
        type: 'object';
      };
      ImageProperties: {
        description: 'The properties of an image.';
        properties: {
          angle: {
            description: 'The clockwise rotation angle of the image, in radians.';
            format: 'float';
            type: 'number';
          };
          brightness: {
            description: 'The brightness effect of the image. The value should be in the interval [-1.0, 1.0], where 0 means no effect.';
            format: 'float';
            type: 'number';
          };
          contentUri: {
            description: "A URI to the image with a default lifetime of 30 minutes. This URI is tagged with the account of the requester. Anyone with the URI effectively accesses the image as the original requester. Access to the image may be lost if the document's sharing settings change.";
            type: 'string';
          };
          contrast: {
            description: 'The contrast effect of the image. The value should be in the interval [-1.0, 1.0], where 0 means no effect.';
            format: 'float';
            type: 'number';
          };
          cropProperties: {
            $ref: '#/components/schemas/CropProperties';
            description: 'The crop properties of the image.';
          };
          sourceUri: {
            description: 'The source URI is the URI used to insert the image. The source URI can be empty.';
            type: 'string';
          };
          transparency: {
            description: 'The transparency effect of the image. The value should be in the interval [0.0, 1.0], where 0 means no effect and 1 means transparent.';
            format: 'float';
            type: 'number';
          };
        };
        type: 'object';
      };
      ImagePropertiesSuggestionState: {
        description: "A mask that indicates which of the fields on the base ImageProperties have been changed in this suggestion. For any field set to true, there's a new suggested value.";
        properties: {
          angleSuggested: {
            description: 'Indicates if there was a suggested change to angle.';
            type: 'boolean';
          };
          brightnessSuggested: {
            description: 'Indicates if there was a suggested change to brightness.';
            type: 'boolean';
          };
          contentUriSuggested: {
            description: 'Indicates if there was a suggested change to content_uri.';
            type: 'boolean';
          };
          contrastSuggested: {
            description: 'Indicates if there was a suggested change to contrast.';
            type: 'boolean';
          };
          cropPropertiesSuggestionState: {
            $ref: '#/components/schemas/CropPropertiesSuggestionState';
            description: 'A mask that indicates which of the fields in crop_properties have been changed in this suggestion.';
          };
          sourceUriSuggested: {
            description: 'Indicates if there was a suggested change to source_uri.';
            type: 'boolean';
          };
          transparencySuggested: {
            description: 'Indicates if there was a suggested change to transparency.';
            type: 'boolean';
          };
        };
        type: 'object';
      };
      InlineObject: {
        description: 'An object that appears inline with text. An InlineObject contains an EmbeddedObject such as an image.';
        properties: {
          inlineObjectProperties: {
            $ref: '#/components/schemas/InlineObjectProperties';
            description: 'The properties of this inline object.';
          };
          objectId: {
            description: 'The ID of this inline object. Can be used to update an object’s properties.';
            type: 'string';
          };
          suggestedDeletionIds: {
            description: 'The suggested deletion IDs. If empty, then there are no suggested deletions of this content.';
            items: {
              type: 'string';
            };
            type: 'array';
          };
          suggestedInlineObjectPropertiesChanges: {
            additionalProperties: {
              $ref: '#/components/schemas/SuggestedInlineObjectProperties';
            };
            description: 'The suggested changes to the inline object properties, keyed by suggestion ID.';
            type: 'object';
          };
          suggestedInsertionId: {
            description: 'The suggested insertion ID. If empty, then this is not a suggested insertion.';
            type: 'string';
          };
        };
        type: 'object';
      };
      InlineObjectElement: {
        description: 'A ParagraphElement that contains an InlineObject.';
        properties: {
          inlineObjectId: {
            description: 'The ID of the InlineObject this element contains.';
            type: 'string';
          };
          suggestedDeletionIds: {
            description: 'The suggested deletion IDs. If empty, then there are no suggested deletions of this content.';
            items: {
              type: 'string';
            };
            type: 'array';
          };
          suggestedInsertionIds: {
            description: "The suggested insertion IDs. An InlineObjectElement may have multiple insertion IDs if it's a nested suggested change. If empty, then this is not a suggested insertion.";
            items: {
              type: 'string';
            };
            type: 'array';
          };
          suggestedTextStyleChanges: {
            additionalProperties: {
              $ref: '#/components/schemas/SuggestedTextStyle';
            };
            description: 'The suggested text style changes to this InlineObject, keyed by suggestion ID.';
            type: 'object';
          };
          textStyle: {
            $ref: '#/components/schemas/TextStyle';
            description: 'The text style of this InlineObjectElement. Similar to text content, like text runs and footnote references, the text style of an inline object element can affect content layout as well as the styling of text inserted next to it.';
          };
        };
        type: 'object';
      };
      InlineObjectProperties: {
        description: 'Properties of an InlineObject.';
        properties: {
          embeddedObject: {
            $ref: '#/components/schemas/EmbeddedObject';
            description: 'The embedded object of this inline object.';
          };
        };
        type: 'object';
      };
      InlineObjectPropertiesSuggestionState: {
        description: "A mask that indicates which of the fields on the base InlineObjectProperties have been changed in this suggestion. For any field set to true, there's a new suggested value.";
        properties: {
          embeddedObjectSuggestionState: {
            $ref: '#/components/schemas/EmbeddedObjectSuggestionState';
            description: 'A mask that indicates which of the fields in embedded_object have been changed in this suggestion.';
          };
        };
        type: 'object';
      };
      InsertInlineImageRequest: {
        description: 'Inserts an InlineObject containing an image at the given location.';
        properties: {
          endOfSegmentLocation: {
            $ref: '#/components/schemas/EndOfSegmentLocation';
            description: 'Inserts the text at the end of a header, footer or the document body. Inline images cannot be inserted inside a footnote.';
          };
          location: {
            $ref: '#/components/schemas/Location';
            description: "Inserts the image at a specific index in the document. The image must be inserted inside the bounds of an existing Paragraph. For instance, it cannot be inserted at a table's start index (i.e. between the table and its preceding paragraph). Inline images cannot be inserted inside a footnote or equation.";
          };
          objectSize: {
            $ref: '#/components/schemas/Size';
            description: 'The size that the image should appear as in the document. This property is optional and the final size of the image in the document is determined by the following rules: * If neither width nor height is specified, then a default size of the image is calculated based on its resolution. * If one dimension is specified then the other dimension is calculated to preserve the aspect ratio of the image. * If both width and height are specified, the image is scaled to fit within the provided dimensions while maintaining its aspect ratio.';
          };
          uri: {
            description: 'The image URI. The image is fetched once at insertion time and a copy is stored for display inside the document. Images must be less than 50MB in size, cannot exceed 25 megapixels, and must be in one of PNG, JPEG, or GIF format. The provided URI must be publicly accessible and at most 2 kB in length. The URI itself is saved with the image, and exposed via the ImageProperties.content_uri field.';
            type: 'string';
          };
        };
        type: 'object';
      };
      InsertInlineImageResponse: {
        description: 'The result of inserting an inline image.';
        properties: {
          objectId: {
            description: 'The ID of the created InlineObject.';
            type: 'string';
          };
        };
        type: 'object';
      };
      InsertInlineSheetsChartResponse: {
        description: 'The result of inserting an embedded Google Sheets chart.';
        properties: {
          objectId: {
            description: 'The object ID of the inserted chart.';
            type: 'string';
          };
        };
        type: 'object';
      };
      InsertPageBreakRequest: {
        description: 'Inserts a page break followed by a newline at the specified location.';
        properties: {
          endOfSegmentLocation: {
            $ref: '#/components/schemas/EndOfSegmentLocation';
            description: 'Inserts the page break at the end of the document body. Page breaks cannot be inserted inside a footnote, header or footer. Since page breaks can only be inserted inside the body, the segment ID field must be empty.';
          };
          location: {
            $ref: '#/components/schemas/Location';
            description: "Inserts the page break at a specific index in the document. The page break must be inserted inside the bounds of an existing Paragraph. For instance, it cannot be inserted at a table's start index (i.e. between the table and its preceding paragraph). Page breaks cannot be inserted inside a table, equation, footnote, header or footer. Since page breaks can only be inserted inside the body, the segment ID field must be empty.";
          };
        };
        type: 'object';
      };
      InsertSectionBreakRequest: {
        description: 'Inserts a section break at the given location. A newline character will be inserted before the section break.';
        properties: {
          endOfSegmentLocation: {
            $ref: '#/components/schemas/EndOfSegmentLocation';
            description: 'Inserts a newline and a section break at the end of the document body. Section breaks cannot be inserted inside a footnote, header or footer. Because section breaks can only be inserted inside the body, the segment ID field must be empty.';
          };
          location: {
            $ref: '#/components/schemas/Location';
            description: "Inserts a newline and a section break at a specific index in the document. The section break must be inserted inside the bounds of an existing Paragraph. For instance, it cannot be inserted at a table's start index (i.e. between the table and its preceding paragraph). Section breaks cannot be inserted inside a table, equation, footnote, header, or footer. Since section breaks can only be inserted inside the body, the segment ID field must be empty.";
          };
          sectionType: {
            description: 'The type of section to insert.';
            enum: ['SECTION_TYPE_UNSPECIFIED', 'CONTINUOUS', 'NEXT_PAGE'];
            type: 'string';
          };
        };
        type: 'object';
      };
      InsertTableColumnRequest: {
        description: 'Inserts an empty column into a table.';
        properties: {
          insertRight: {
            description: 'Whether to insert new column to the right of the reference cell location. - `True`: insert to the right. - `False`: insert to the left.';
            type: 'boolean';
          };
          tableCellLocation: {
            $ref: '#/components/schemas/TableCellLocation';
            description: 'The reference table cell location from which columns will be inserted. A new column will be inserted to the left (or right) of the column where the reference cell is. If the reference cell is a merged cell, a new column will be inserted to the left (or right) of the merged cell.';
          };
        };
        type: 'object';
      };
      InsertTableRequest: {
        description: 'Inserts a table at the specified location. A newline character will be inserted before the inserted table.';
        properties: {
          columns: {
            description: 'The number of columns in the table.';
            format: 'int32';
            type: 'integer';
          };
          endOfSegmentLocation: {
            $ref: '#/components/schemas/EndOfSegmentLocation';
            description: 'Inserts the table at the end of the given header, footer or document body. A newline character will be inserted before the inserted table. Tables cannot be inserted inside a footnote.';
          };
          location: {
            $ref: '#/components/schemas/Location';
            description: "Inserts the table at a specific model index. A newline character will be inserted before the inserted table, therefore the table start index will be at the specified location index + 1. The table must be inserted inside the bounds of an existing Paragraph. For instance, it cannot be inserted at a table's start index (i.e. between an existing table and its preceding paragraph). Tables cannot be inserted inside a footnote or equation.";
          };
          rows: {
            description: 'The number of rows in the table.';
            format: 'int32';
            type: 'integer';
          };
        };
        type: 'object';
      };
      InsertTableRowRequest: {
        description: 'Inserts an empty row into a table.';
        properties: {
          insertBelow: {
            description: 'Whether to insert new row below the reference cell location. - `True`: insert below the cell. - `False`: insert above the cell.';
            type: 'boolean';
          };
          tableCellLocation: {
            $ref: '#/components/schemas/TableCellLocation';
            description: 'The reference table cell location from which rows will be inserted. A new row will be inserted above (or below) the row where the reference cell is. If the reference cell is a merged cell, a new row will be inserted above (or below) the merged cell.';
          };
        };
        type: 'object';
      };
      InsertTextRequest: {
        description: 'Inserts text at the specified location.';
        properties: {
          endOfSegmentLocation: {
            $ref: '#/components/schemas/EndOfSegmentLocation';
            description: 'Inserts the text at the end of a header, footer, footnote or the document body.';
          };
          location: {
            $ref: '#/components/schemas/Location';
            description: "Inserts the text at a specific index in the document. Text must be inserted inside the bounds of an existing Paragraph. For instance, text cannot be inserted at a table's start index (i.e. between the table and its preceding paragraph). The text must be inserted in the preceding paragraph.";
          };
          text: {
            description: 'The text to be inserted. Inserting a newline character will implicitly create a new Paragraph at that index. The paragraph style of the new paragraph will be copied from the paragraph at the current insertion index, including lists and bullets. Text styles for inserted text will be determined automatically, generally preserving the styling of neighboring text. In most cases, the text style for the inserted text will match the text immediately before the insertion index. Some control characters (U+0000-U+0008, U+000C-U+001F) and characters from the Unicode Basic Multilingual Plane Private Use Area (U+E000-U+F8FF) will be stripped out of the inserted text.';
            type: 'string';
          };
        };
        type: 'object';
      };
      Link: {
        description: 'A reference to another portion of a document or an external URL resource.';
        properties: {
          bookmarkId: {
            description: 'The ID of a bookmark in this document.';
            type: 'string';
          };
          headingId: {
            description: 'The ID of a heading in this document.';
            type: 'string';
          };
          url: {
            description: 'An external URL.';
            type: 'string';
          };
        };
        type: 'object';
      };
      LinkedContentReference: {
        description: 'A reference to the external linked source content.';
        properties: {
          sheetsChartReference: {
            $ref: '#/components/schemas/SheetsChartReference';
            description: 'A reference to the linked chart.';
          };
        };
        type: 'object';
      };
      LinkedContentReferenceSuggestionState: {
        description: "A mask that indicates which of the fields on the base LinkedContentReference have been changed in this suggestion. For any field set to true, there's a new suggested value.";
        properties: {
          sheetsChartReferenceSuggestionState: {
            $ref: '#/components/schemas/SheetsChartReferenceSuggestionState';
            description: 'A mask that indicates which of the fields in sheets_chart_reference have been changed in this suggestion.';
          };
        };
        type: 'object';
      };
      List: {
        description: "A List represents the list attributes for a group of paragraphs that all belong to the same list. A paragraph that's part of a list has a reference to the list's ID in its bullet.";
        properties: {
          listProperties: {
            $ref: '#/components/schemas/ListProperties';
            description: 'The properties of the list.';
          };
          suggestedDeletionIds: {
            description: 'The suggested deletion IDs. If empty, then there are no suggested deletions of this list.';
            items: {
              type: 'string';
            };
            type: 'array';
          };
          suggestedInsertionId: {
            description: 'The suggested insertion ID. If empty, then this is not a suggested insertion.';
            type: 'string';
          };
          suggestedListPropertiesChanges: {
            additionalProperties: {
              $ref: '#/components/schemas/SuggestedListProperties';
            };
            description: 'The suggested changes to the list properties, keyed by suggestion ID.';
            type: 'object';
          };
        };
        type: 'object';
      };
      ListProperties: {
        description: 'The properties of a list that describe the look and feel of bullets belonging to paragraphs associated with a list.';
        properties: {
          nestingLevels: {
            description: 'Describes the properties of the bullets at the associated level. A list has at most 9 levels of nesting with nesting level 0 corresponding to the top-most level and nesting level 8 corresponding to the most nested level. The nesting levels are returned in ascending order with the least nested returned first.';
            items: {
              $ref: '#/components/schemas/NestingLevel';
            };
            type: 'array';
          };
        };
        type: 'object';
      };
      ListPropertiesSuggestionState: {
        description: "A mask that indicates which of the fields on the base ListProperties have been changed in this suggestion. For any field set to true, there's a new suggested value.";
        properties: {
          nestingLevelsSuggestionStates: {
            description: 'A mask that indicates which of the fields on the corresponding NestingLevel in nesting_levels have been changed in this suggestion. The nesting level suggestion states are returned in ascending order of the nesting level with the least nested returned first.';
            items: {
              $ref: '#/components/schemas/NestingLevelSuggestionState';
            };
            type: 'array';
          };
        };
        type: 'object';
      };
      Location: {
        description: 'A particular location in the document.';
        properties: {
          index: {
            description: 'The zero-based index, in UTF-16 code units. The index is relative to the beginning of the segment specified by segment_id.';
            format: 'int32';
            type: 'integer';
          };
          segmentId: {
            description: "The ID of the header, footer or footnote the location is in. An empty segment ID signifies the document's body.";
            type: 'string';
          };
        };
        type: 'object';
      };
      MergeTableCellsRequest: {
        description: 'Merges cells in a Table.';
        properties: {
          tableRange: {
            $ref: '#/components/schemas/TableRange';
            description: 'The table range specifying which cells of the table to merge. Any text in the cells being merged will be concatenated and stored in the "head" cell of the range. This is the upper-left cell of the range when the content direction is left to right, and the upper-right cell of the range otherwise. If the range is non-rectangular (which can occur in some cases where the range covers cells that are already merged or where the table is non-rectangular), a 400 bad request error is returned.';
          };
        };
        type: 'object';
      };
      NamedRange: {
        description: 'A collection of Ranges with the same named range ID. Named ranges allow developers to associate parts of a document with an arbitrary user-defined label so their contents can be programmatically read or edited later. A document can contain multiple named ranges with the same name, but every named range has a unique ID. A named range is created with a single Range, and content inserted inside a named range generally expands that range. However, certain document changes can cause the range to be split into multiple ranges. Named ranges are not private. All applications and collaborators that have access to the document can see its named ranges.';
        properties: {
          name: {
            description: 'The name of the named range.';
            type: 'string';
          };
          namedRangeId: {
            description: 'The ID of the named range.';
            type: 'string';
          };
          ranges: {
            description: 'The ranges that belong to this named range.';
            items: {
              $ref: '#/components/schemas/Range';
            };
            type: 'array';
          };
        };
        type: 'object';
      };
      NamedRanges: {
        description: 'A collection of all the NamedRanges in the document that share a given name.';
        properties: {
          name: {
            description: 'The name that all the named ranges share.';
            type: 'string';
          };
          namedRanges: {
            description: 'The NamedRanges that share the same name.';
            items: {
              $ref: '#/components/schemas/NamedRange';
            };
            type: 'array';
          };
        };
        type: 'object';
      };
      NamedStyle: {
        description: 'A named style. Paragraphs in the document can inherit their TextStyle and ParagraphStyle from this named style when they have the same named style type.';
        properties: {
          namedStyleType: {
            description: 'The type of this named style.';
            enum: [
              'NAMED_STYLE_TYPE_UNSPECIFIED',
              'NORMAL_TEXT',
              'TITLE',
              'SUBTITLE',
              'HEADING_1',
              'HEADING_2',
              'HEADING_3',
              'HEADING_4',
              'HEADING_5',
              'HEADING_6',
            ];
            type: 'string';
          };
          paragraphStyle: {
            $ref: '#/components/schemas/ParagraphStyle';
            description: 'The paragraph style of this named style.';
          };
          textStyle: {
            $ref: '#/components/schemas/TextStyle';
            description: 'The text style of this named style.';
          };
        };
        type: 'object';
      };
      NamedStyleSuggestionState: {
        description: 'A suggestion state of a NamedStyle message.';
        properties: {
          namedStyleType: {
            description: 'The named style type that this suggestion state corresponds to. This field is provided as a convenience for matching the NamedStyleSuggestionState with its corresponding NamedStyle.';
            enum: [
              'NAMED_STYLE_TYPE_UNSPECIFIED',
              'NORMAL_TEXT',
              'TITLE',
              'SUBTITLE',
              'HEADING_1',
              'HEADING_2',
              'HEADING_3',
              'HEADING_4',
              'HEADING_5',
              'HEADING_6',
            ];
            type: 'string';
          };
          paragraphStyleSuggestionState: {
            $ref: '#/components/schemas/ParagraphStyleSuggestionState';
            description: 'A mask that indicates which of the fields in paragraph style have been changed in this suggestion.';
          };
          textStyleSuggestionState: {
            $ref: '#/components/schemas/TextStyleSuggestionState';
            description: 'A mask that indicates which of the fields in text style have been changed in this suggestion.';
          };
        };
        type: 'object';
      };
      NamedStyles: {
        description: 'The named styles. Paragraphs in the document can inherit their TextStyle and ParagraphStyle from these named styles.';
        properties: {
          styles: {
            description: "The named styles. There's an entry for each of the possible named style types.";
            items: {
              $ref: '#/components/schemas/NamedStyle';
            };
            type: 'array';
          };
        };
        type: 'object';
      };
      NamedStylesSuggestionState: {
        description: 'The suggestion state of a NamedStyles message.';
        properties: {
          stylesSuggestionStates: {
            description: 'A mask that indicates which of the fields on the corresponding NamedStyle in styles have been changed in this suggestion. The order of these named style suggestion states matches the order of the corresponding named style within the named styles suggestion.';
            items: {
              $ref: '#/components/schemas/NamedStyleSuggestionState';
            };
            type: 'array';
          };
        };
        type: 'object';
      };
      NestingLevel: {
        description: 'Contains properties describing the look and feel of a list bullet at a given level of nesting.';
        properties: {
          bulletAlignment: {
            description: 'The alignment of the bullet within the space allotted for rendering the bullet.';
            enum: ['BULLET_ALIGNMENT_UNSPECIFIED', 'START', 'CENTER', 'END'];
            type: 'string';
          };
          glyphFormat: {
            description: "The format string used by bullets at this level of nesting. The glyph format contains one or more placeholders, and these placeholders are replaced with the appropriate values depending on the glyph_type or glyph_symbol. The placeholders follow the pattern `%[nesting_level]`. Furthermore, placeholders can have prefixes and suffixes. Thus, the glyph format follows the pattern `%[nesting_level]`. Note that the prefix and suffix are optional and can be arbitrary strings. For example, the glyph format `%0.` indicates that the rendered glyph will replace the placeholder with the corresponding glyph for nesting level 0 followed by a period as the suffix. So a list with a glyph type of UPPER_ALPHA and glyph format `%0.` at nesting level 0 will result in a list with rendered glyphs `A.` `B.` `C.` The glyph format can contain placeholders for the current nesting level as well as placeholders for parent nesting levels. For example, a list can have a glyph format of `%0.` at nesting level 0 and a glyph format of `%0.%1.` at nesting level 1. Assuming both nesting levels have DECIMAL glyph types, this would result in a list with rendered glyphs `1.` `2.` ` 2.1.` ` 2.2.` `3.` For nesting levels that are ordered, the string that replaces a placeholder in the glyph format for a particular paragraph depends on the paragraph's order within the list.";
            type: 'string';
          };
          glyphSymbol: {
            description: 'A custom glyph symbol used by bullets when paragraphs at this level of nesting are unordered. The glyph symbol replaces placeholders within the glyph_format. For example, if the glyph_symbol is the solid circle corresponding to Unicode U+25cf code point and the glyph_format is `%0`, the rendered glyph would be the solid circle.';
            type: 'string';
          };
          glyphType: {
            description: "The type of glyph used by bullets when paragraphs at this level of nesting are ordered. The glyph type determines the type of glyph used to replace placeholders within the glyph_format when paragraphs at this level of nesting are ordered. For example, if the nesting level is 0, the glyph_format is `%0.` and the glyph type is DECIMAL, then the rendered glyph would replace the placeholder `%0` in the glyph format with a number corresponding to list item's order within the list.";
            enum: [
              'GLYPH_TYPE_UNSPECIFIED',
              'NONE',
              'DECIMAL',
              'ZERO_DECIMAL',
              'UPPER_ALPHA',
              'ALPHA',
              'UPPER_ROMAN',
              'ROMAN',
            ];
            type: 'string';
          };
          indentFirstLine: {
            $ref: '#/components/schemas/Dimension';
            description: 'The amount of indentation for the first line of paragraphs at this level of nesting.';
          };
          indentStart: {
            $ref: '#/components/schemas/Dimension';
            description: "The amount of indentation for paragraphs at this level of nesting. Applied to the side that corresponds to the start of the text, based on the paragraph's content direction.";
          };
          startNumber: {
            description: 'The number of the first list item at this nesting level. A value of 0 is treated as a value of 1 for lettered lists and Roman numeral lists. For values of both 0 and 1, lettered and Roman numeral lists will begin at `a` and `i` respectively. This value is ignored for nesting levels with unordered glyphs.';
            format: 'int32';
            type: 'integer';
          };
          textStyle: {
            $ref: '#/components/schemas/TextStyle';
            description: 'The text style of bullets at this level of nesting.';
          };
        };
        type: 'object';
      };
      NestingLevelSuggestionState: {
        description: "A mask that indicates which of the fields on the base NestingLevel have been changed in this suggestion. For any field set to true, there's a new suggested value.";
        properties: {
          bulletAlignmentSuggested: {
            description: 'Indicates if there was a suggested change to bullet_alignment.';
            type: 'boolean';
          };
          glyphFormatSuggested: {
            description: 'Indicates if there was a suggested change to glyph_format.';
            type: 'boolean';
          };
          glyphSymbolSuggested: {
            description: 'Indicates if there was a suggested change to glyph_symbol.';
            type: 'boolean';
          };
          glyphTypeSuggested: {
            description: 'Indicates if there was a suggested change to glyph_type.';
            type: 'boolean';
          };
          indentFirstLineSuggested: {
            description: 'Indicates if there was a suggested change to indent_first_line.';
            type: 'boolean';
          };
          indentStartSuggested: {
            description: 'Indicates if there was a suggested change to indent_start.';
            type: 'boolean';
          };
          startNumberSuggested: {
            description: 'Indicates if there was a suggested change to start_number.';
            type: 'boolean';
          };
          textStyleSuggestionState: {
            $ref: '#/components/schemas/TextStyleSuggestionState';
            description: 'A mask that indicates which of the fields in text style have been changed in this suggestion.';
          };
        };
        type: 'object';
      };
      ObjectReferences: {
        description: 'A collection of object IDs.';
        properties: {
          objectIds: {
            description: 'The object IDs.';
            items: {
              type: 'string';
            };
            type: 'array';
          };
        };
        type: 'object';
      };
      OptionalColor: {
        description: 'A color that can either be fully opaque or fully transparent.';
        properties: {
          color: {
            $ref: '#/components/schemas/Color';
            description: 'If set, this will be used as an opaque color. If unset, this represents a transparent color.';
          };
        };
        type: 'object';
      };
      PageBreak: {
        description: 'A ParagraphElement representing a page break. A page break makes the subsequent text start at the top of the next page.';
        properties: {
          suggestedDeletionIds: {
            description: 'The suggested deletion IDs. If empty, then there are no suggested deletions of this content.';
            items: {
              type: 'string';
            };
            type: 'array';
          };
          suggestedInsertionIds: {
            description: "The suggested insertion IDs. A PageBreak may have multiple insertion IDs if it's a nested suggested change. If empty, then this is not a suggested insertion.";
            items: {
              type: 'string';
            };
            type: 'array';
          };
          suggestedTextStyleChanges: {
            additionalProperties: {
              $ref: '#/components/schemas/SuggestedTextStyle';
            };
            description: 'The suggested text style changes to this PageBreak, keyed by suggestion ID.';
            type: 'object';
          };
          textStyle: {
            $ref: '#/components/schemas/TextStyle';
            description: 'The text style of this PageBreak. Similar to text content, like text runs and footnote references, the text style of a page break can affect content layout as well as the styling of text inserted next to it.';
          };
        };
        type: 'object';
      };
      Paragraph: {
        description: "A StructuralElement representing a paragraph. A paragraph is a range of content that's terminated with a newline character.";
        properties: {
          bullet: {
            $ref: '#/components/schemas/Bullet';
            description: 'The bullet for this paragraph. If not present, the paragraph does not belong to a list.';
          };
          elements: {
            description: 'The content of the paragraph, broken down into its component parts.';
            items: {
              $ref: '#/components/schemas/ParagraphElement';
            };
            type: 'array';
          };
          paragraphStyle: {
            $ref: '#/components/schemas/ParagraphStyle';
            description: 'The style of this paragraph.';
          };
          positionedObjectIds: {
            description: 'The IDs of the positioned objects tethered to this paragraph.';
            items: {
              type: 'string';
            };
            type: 'array';
          };
          suggestedBulletChanges: {
            additionalProperties: {
              $ref: '#/components/schemas/SuggestedBullet';
            };
            description: "The suggested changes to this paragraph's bullet.";
            type: 'object';
          };
          suggestedParagraphStyleChanges: {
            additionalProperties: {
              $ref: '#/components/schemas/SuggestedParagraphStyle';
            };
            description: 'The suggested paragraph style changes to this paragraph, keyed by suggestion ID.';
            type: 'object';
          };
          suggestedPositionedObjectIds: {
            additionalProperties: {
              $ref: '#/components/schemas/ObjectReferences';
            };
            description: 'The IDs of the positioned objects suggested to be attached to this paragraph, keyed by suggestion ID.';
            type: 'object';
          };
        };
        type: 'object';
      };
      ParagraphBorder: {
        description: 'A border around a paragraph.';
        properties: {
          color: {
            $ref: '#/components/schemas/OptionalColor';
            description: 'The color of the border.';
          };
          dashStyle: {
            description: 'The dash style of the border.';
            enum: ['DASH_STYLE_UNSPECIFIED', 'SOLID', 'DOT', 'DASH'];
            type: 'string';
          };
          padding: {
            $ref: '#/components/schemas/Dimension';
            description: 'The padding of the border.';
          };
          width: {
            $ref: '#/components/schemas/Dimension';
            description: 'The width of the border.';
          };
        };
        type: 'object';
      };
      ParagraphElement: {
        description: 'A ParagraphElement describes content within a Paragraph.';
        properties: {
          autoText: {
            $ref: '#/components/schemas/AutoText';
            description: 'An auto text paragraph element.';
          };
          columnBreak: {
            $ref: '#/components/schemas/ColumnBreak';
            description: 'A column break paragraph element.';
          };
          endIndex: {
            description: 'The zero-base end index of this paragraph element, exclusive, in UTF-16 code units.';
            format: 'int32';
            type: 'integer';
          };
          equation: {
            $ref: '#/components/schemas/Equation';
            description: 'An equation paragraph element.';
          };
          footnoteReference: {
            $ref: '#/components/schemas/FootnoteReference';
            description: 'A footnote reference paragraph element.';
          };
          horizontalRule: {
            $ref: '#/components/schemas/HorizontalRule';
            description: 'A horizontal rule paragraph element.';
          };
          inlineObjectElement: {
            $ref: '#/components/schemas/InlineObjectElement';
            description: 'An inline object paragraph element.';
          };
          pageBreak: {
            $ref: '#/components/schemas/PageBreak';
            description: 'A page break paragraph element.';
          };
          person: {
            $ref: '#/components/schemas/Person';
            description: 'A paragraph element that links to a person or email address.';
          };
          richLink: {
            $ref: '#/components/schemas/RichLink';
            description: 'A paragraph element that links to a Google resource (such as a file in Google Drive, a YouTube video, or a Calendar event.)';
          };
          startIndex: {
            description: 'The zero-based start index of this paragraph element, in UTF-16 code units.';
            format: 'int32';
            type: 'integer';
          };
          textRun: {
            $ref: '#/components/schemas/TextRun';
            description: 'A text run paragraph element.';
          };
        };
        type: 'object';
      };
      ParagraphStyle: {
        description: "Styles that apply to a whole paragraph. Inherited paragraph styles are represented as unset fields in this message. A paragraph style's parent depends on where the paragraph style is defined: * The ParagraphStyle on a Paragraph inherits from the paragraph's corresponding named style type. * The ParagraphStyle on a named style inherits from the normal text named style. * The ParagraphStyle of the normal text named style inherits from the default paragraph style in the Docs editor. * The ParagraphStyle on a Paragraph element that's contained in a table may inherit its paragraph style from the table style. If the paragraph style does not inherit from a parent, unsetting fields will revert the style to a value matching the defaults in the Docs editor.";
        properties: {
          alignment: {
            description: 'The text alignment for this paragraph.';
            enum: ['ALIGNMENT_UNSPECIFIED', 'START', 'CENTER', 'END', 'JUSTIFIED'];
            type: 'string';
          };
          avoidWidowAndOrphan: {
            description: 'Whether to avoid widows and orphans for the paragraph. If unset, the value is inherited from the parent.';
            type: 'boolean';
          };
          borderBetween: {
            $ref: '#/components/schemas/ParagraphBorder';
            description: 'The border between this paragraph and the next and previous paragraphs. If unset, the value is inherited from the parent. The between border is rendered when the adjacent paragraph has the same border and indent properties. Paragraph borders cannot be partially updated. When changing a paragraph border, the new border must be specified in its entirety.';
          };
          borderBottom: {
            $ref: '#/components/schemas/ParagraphBorder';
            description: 'The border at the bottom of this paragraph. If unset, the value is inherited from the parent. The bottom border is rendered when the paragraph below has different border and indent properties. Paragraph borders cannot be partially updated. When changing a paragraph border, the new border must be specified in its entirety.';
          };
          borderLeft: {
            $ref: '#/components/schemas/ParagraphBorder';
            description: 'The border to the left of this paragraph. If unset, the value is inherited from the parent. Paragraph borders cannot be partially updated. When changing a paragraph border, the new border must be specified in its entirety.';
          };
          borderRight: {
            $ref: '#/components/schemas/ParagraphBorder';
            description: 'The border to the right of this paragraph. If unset, the value is inherited from the parent. Paragraph borders cannot be partially updated. When changing a paragraph border, the new border must be specified in its entirety.';
          };
          borderTop: {
            $ref: '#/components/schemas/ParagraphBorder';
            description: 'The border at the top of this paragraph. If unset, the value is inherited from the parent. The top border is rendered when the paragraph above has different border and indent properties. Paragraph borders cannot be partially updated. When changing a paragraph border, the new border must be specified in its entirety.';
          };
          direction: {
            description: 'The text direction of this paragraph. If unset, the value defaults to LEFT_TO_RIGHT since paragraph direction is not inherited.';
            enum: ['CONTENT_DIRECTION_UNSPECIFIED', 'LEFT_TO_RIGHT', 'RIGHT_TO_LEFT'];
            type: 'string';
          };
          headingId: {
            description: 'The heading ID of the paragraph. If empty, then this paragraph is not a heading. This property is read-only.';
            type: 'string';
          };
          indentEnd: {
            $ref: '#/components/schemas/Dimension';
            description: 'The amount of indentation for the paragraph on the side that corresponds to the end of the text, based on the current paragraph direction. If unset, the value is inherited from the parent.';
          };
          indentFirstLine: {
            $ref: '#/components/schemas/Dimension';
            description: 'The amount of indentation for the first line of the paragraph. If unset, the value is inherited from the parent.';
          };
          indentStart: {
            $ref: '#/components/schemas/Dimension';
            description: 'The amount of indentation for the paragraph on the side that corresponds to the start of the text, based on the current paragraph direction. If unset, the value is inherited from the parent.';
          };
          keepLinesTogether: {
            description: 'Whether all lines of the paragraph should be laid out on the same page or column if possible. If unset, the value is inherited from the parent.';
            type: 'boolean';
          };
          keepWithNext: {
            description: 'Whether at least a part of this paragraph should be laid out on the same page or column as the next paragraph if possible. If unset, the value is inherited from the parent.';
            type: 'boolean';
          };
          lineSpacing: {
            description: 'The amount of space between lines, as a percentage of normal, where normal is represented as 100.0. If unset, the value is inherited from the parent.';
            format: 'float';
            type: 'number';
          };
          namedStyleType: {
            description: 'The named style type of the paragraph. Since updating the named style type affects other properties within ParagraphStyle, the named style type is applied before the other properties are updated.';
            enum: [
              'NAMED_STYLE_TYPE_UNSPECIFIED',
              'NORMAL_TEXT',
              'TITLE',
              'SUBTITLE',
              'HEADING_1',
              'HEADING_2',
              'HEADING_3',
              'HEADING_4',
              'HEADING_5',
              'HEADING_6',
            ];
            type: 'string';
          };
          pageBreakBefore: {
            description: 'Whether the current paragraph should always start at the beginning of a page. If unset, the value is inherited from the parent. Attempting to update page_break_before for paragraphs in unsupported regions, including Table, Header, Footer and Footnote, can result in an invalid document state that returns a 400 bad request error.';
            type: 'boolean';
          };
          shading: {
            $ref: '#/components/schemas/Shading';
            description: 'The shading of the paragraph. If unset, the value is inherited from the parent.';
          };
          spaceAbove: {
            $ref: '#/components/schemas/Dimension';
            description: 'The amount of extra space above the paragraph. If unset, the value is inherited from the parent.';
          };
          spaceBelow: {
            $ref: '#/components/schemas/Dimension';
            description: 'The amount of extra space below the paragraph. If unset, the value is inherited from the parent.';
          };
          spacingMode: {
            description: 'The spacing mode for the paragraph.';
            enum: ['SPACING_MODE_UNSPECIFIED', 'NEVER_COLLAPSE', 'COLLAPSE_LISTS'];
            type: 'string';
          };
          tabStops: {
            description: 'A list of the tab stops for this paragraph. The list of tab stops is not inherited. This property is read-only.';
            items: {
              $ref: '#/components/schemas/TabStop';
            };
            type: 'array';
          };
        };
        type: 'object';
      };
      ParagraphStyleSuggestionState: {
        description: "A mask that indicates which of the fields on the base ParagraphStyle have been changed in this suggestion. For any field set to true, there's a new suggested value.";
        properties: {
          alignmentSuggested: {
            description: 'Indicates if there was a suggested change to alignment.';
            type: 'boolean';
          };
          avoidWidowAndOrphanSuggested: {
            description: 'Indicates if there was a suggested change to avoid_widow_and_orphan.';
            type: 'boolean';
          };
          borderBetweenSuggested: {
            description: 'Indicates if there was a suggested change to border_between.';
            type: 'boolean';
          };
          borderBottomSuggested: {
            description: 'Indicates if there was a suggested change to border_bottom.';
            type: 'boolean';
          };
          borderLeftSuggested: {
            description: 'Indicates if there was a suggested change to border_left.';
            type: 'boolean';
          };
          borderRightSuggested: {
            description: 'Indicates if there was a suggested change to border_right.';
            type: 'boolean';
          };
          borderTopSuggested: {
            description: 'Indicates if there was a suggested change to border_top.';
            type: 'boolean';
          };
          directionSuggested: {
            description: 'Indicates if there was a suggested change to direction.';
            type: 'boolean';
          };
          headingIdSuggested: {
            description: 'Indicates if there was a suggested change to heading_id.';
            type: 'boolean';
          };
          indentEndSuggested: {
            description: 'Indicates if there was a suggested change to indent_end.';
            type: 'boolean';
          };
          indentFirstLineSuggested: {
            description: 'Indicates if there was a suggested change to indent_first_line.';
            type: 'boolean';
          };
          indentStartSuggested: {
            description: 'Indicates if there was a suggested change to indent_start.';
            type: 'boolean';
          };
          keepLinesTogetherSuggested: {
            description: 'Indicates if there was a suggested change to keep_lines_together.';
            type: 'boolean';
          };
          keepWithNextSuggested: {
            description: 'Indicates if there was a suggested change to keep_with_next.';
            type: 'boolean';
          };
          lineSpacingSuggested: {
            description: 'Indicates if there was a suggested change to line_spacing.';
            type: 'boolean';
          };
          namedStyleTypeSuggested: {
            description: 'Indicates if there was a suggested change to named_style_type.';
            type: 'boolean';
          };
          pageBreakBeforeSuggested: {
            description: 'Indicates if there was a suggested change to page_break_before.';
            type: 'boolean';
          };
          shadingSuggestionState: {
            $ref: '#/components/schemas/ShadingSuggestionState';
            description: 'A mask that indicates which of the fields in shading have been changed in this suggestion.';
          };
          spaceAboveSuggested: {
            description: 'Indicates if there was a suggested change to space_above.';
            type: 'boolean';
          };
          spaceBelowSuggested: {
            description: 'Indicates if there was a suggested change to space_below.';
            type: 'boolean';
          };
          spacingModeSuggested: {
            description: 'Indicates if there was a suggested change to spacing_mode.';
            type: 'boolean';
          };
        };
        type: 'object';
      };
      Person: {
        description: "A person or email address mentioned in a document. These mentions behave as a single, immutable element containing the person's name or email address.";
        properties: {
          personId: {
            description: 'Output only. The unique ID of this link.';
            readOnly: true;
            type: 'string';
          };
          personProperties: {
            $ref: '#/components/schemas/PersonProperties';
            description: 'Output only. The properties of this Person. This field is always present.';
            readOnly: true;
          };
          suggestedDeletionIds: {
            description: "IDs for suggestions that remove this person link from the document. A Person might have multiple deletion IDs if, for example, multiple users suggest deleting it. If empty, then this person link isn't suggested for deletion.";
            items: {
              type: 'string';
            };
            type: 'array';
          };
          suggestedInsertionIds: {
            description: "IDs for suggestions that insert this person link into the document. A Person might have multiple insertion IDs if it's a nested suggested change (a suggestion within a suggestion made by a different user, for example). If empty, then this person link isn't a suggested insertion.";
            items: {
              type: 'string';
            };
            type: 'array';
          };
          suggestedTextStyleChanges: {
            additionalProperties: {
              $ref: '#/components/schemas/SuggestedTextStyle';
            };
            description: 'The suggested text style changes to this Person, keyed by suggestion ID.';
            type: 'object';
          };
          textStyle: {
            $ref: '#/components/schemas/TextStyle';
            description: 'The text style of this Person.';
          };
        };
        type: 'object';
      };
      PersonProperties: {
        description: 'Properties specific to a linked Person.';
        properties: {
          email: {
            description: 'Output only. The email address linked to this Person. This field is always present.';
            readOnly: true;
            type: 'string';
          };
          name: {
            description: "Output only. The name of the person if it's displayed in the link text instead of the person's email address.";
            readOnly: true;
            type: 'string';
          };
        };
        type: 'object';
      };
      PinTableHeaderRowsRequest: {
        description: 'Updates the number of pinned table header rows in a table.';
        properties: {
          pinnedHeaderRowsCount: {
            description: 'The number of table rows to pin, where 0 implies that all rows are unpinned.';
            format: 'int32';
            type: 'integer';
          };
          tableStartLocation: {
            $ref: '#/components/schemas/Location';
            description: 'The location where the table starts in the document.';
          };
        };
        type: 'object';
      };
      PositionedObject: {
        description: "An object that's tethered to a Paragraph and positioned relative to the beginning of the paragraph. A PositionedObject contains an EmbeddedObject such as an image.";
        properties: {
          objectId: {
            description: 'The ID of this positioned object.';
            type: 'string';
          };
          positionedObjectProperties: {
            $ref: '#/components/schemas/PositionedObjectProperties';
            description: 'The properties of this positioned object.';
          };
          suggestedDeletionIds: {
            description: 'The suggested deletion IDs. If empty, then there are no suggested deletions of this content.';
            items: {
              type: 'string';
            };
            type: 'array';
          };
          suggestedInsertionId: {
            description: 'The suggested insertion ID. If empty, then this is not a suggested insertion.';
            type: 'string';
          };
          suggestedPositionedObjectPropertiesChanges: {
            additionalProperties: {
              $ref: '#/components/schemas/SuggestedPositionedObjectProperties';
            };
            description: 'The suggested changes to the positioned object properties, keyed by suggestion ID.';
            type: 'object';
          };
        };
        type: 'object';
      };
      PositionedObjectPositioning: {
        description: "The positioning of a PositionedObject. The positioned object is positioned relative to the beginning of the Paragraph it's tethered to.";
        properties: {
          layout: {
            description: 'The layout of this positioned object.';
            enum: [
              'POSITIONED_OBJECT_LAYOUT_UNSPECIFIED',
              'WRAP_TEXT',
              'BREAK_LEFT',
              'BREAK_RIGHT',
              'BREAK_LEFT_RIGHT',
              'IN_FRONT_OF_TEXT',
              'BEHIND_TEXT',
            ];
            type: 'string';
          };
          leftOffset: {
            $ref: '#/components/schemas/Dimension';
            description: "The offset of the left edge of the positioned object relative to the beginning of the Paragraph it's tethered to. The exact positioning of the object can depend on other content in the document and the document's styling.";
          };
          topOffset: {
            $ref: '#/components/schemas/Dimension';
            description: "The offset of the top edge of the positioned object relative to the beginning of the Paragraph it's tethered to. The exact positioning of the object can depend on other content in the document and the document's styling.";
          };
        };
        type: 'object';
      };
      PositionedObjectPositioningSuggestionState: {
        description: "A mask that indicates which of the fields on the base PositionedObjectPositioning have been changed in this suggestion. For any field set to true, there's a new suggested value.";
        properties: {
          layoutSuggested: {
            description: 'Indicates if there was a suggested change to layout.';
            type: 'boolean';
          };
          leftOffsetSuggested: {
            description: 'Indicates if there was a suggested change to left_offset.';
            type: 'boolean';
          };
          topOffsetSuggested: {
            description: 'Indicates if there was a suggested change to top_offset.';
            type: 'boolean';
          };
        };
        type: 'object';
      };
      PositionedObjectProperties: {
        description: 'Properties of a PositionedObject.';
        properties: {
          embeddedObject: {
            $ref: '#/components/schemas/EmbeddedObject';
            description: 'The embedded object of this positioned object.';
          };
          positioning: {
            $ref: '#/components/schemas/PositionedObjectPositioning';
            description: 'The positioning of this positioned object relative to the newline of the Paragraph that references this positioned object.';
          };
        };
        type: 'object';
      };
      PositionedObjectPropertiesSuggestionState: {
        description: "A mask that indicates which of the fields on the base PositionedObjectProperties have been changed in this suggestion. For any field set to true, there's a new suggested value.";
        properties: {
          embeddedObjectSuggestionState: {
            $ref: '#/components/schemas/EmbeddedObjectSuggestionState';
            description: 'A mask that indicates which of the fields in embedded_object have been changed in this suggestion.';
          };
          positioningSuggestionState: {
            $ref: '#/components/schemas/PositionedObjectPositioningSuggestionState';
            description: 'A mask that indicates which of the fields in positioning have been changed in this suggestion.';
          };
        };
        type: 'object';
      };
      Range: {
        description: 'Specifies a contiguous range of text.';
        properties: {
          endIndex: {
            description: 'The zero-based end index of this range, exclusive, in UTF-16 code units. In all current uses, an end index must be provided. This field is an Int32Value in order to accommodate future use cases with open-ended ranges.';
            format: 'int32';
            type: 'integer';
          };
          segmentId: {
            description: "The ID of the header, footer, or footnote that this range is contained in. An empty segment ID signifies the document's body.";
            type: 'string';
          };
          startIndex: {
            description: 'The zero-based start index of this range, in UTF-16 code units. In all current uses, a start index must be provided. This field is an Int32Value in order to accommodate future use cases with open-ended ranges.';
            format: 'int32';
            type: 'integer';
          };
        };
        type: 'object';
      };
      ReplaceAllTextRequest: {
        description: 'Replaces all instances of text matching a criteria with replace text.';
        properties: {
          containsText: {
            $ref: '#/components/schemas/SubstringMatchCriteria';
            description: 'Finds text in the document matching this substring.';
          };
          replaceText: {
            description: 'The text that will replace the matched text.';
            type: 'string';
          };
        };
        type: 'object';
      };
      ReplaceAllTextResponse: {
        description: 'The result of replacing text.';
        properties: {
          occurrencesChanged: {
            description: 'The number of occurrences changed by replacing all text.';
            format: 'int32';
            type: 'integer';
          };
        };
        type: 'object';
      };
      ReplaceImageRequest: {
        description: 'Replaces an existing image with a new image. Replacing an image removes some image effects from the existing image in order to mirror the behavior of the Docs editor.';
        properties: {
          imageObjectId: {
            description: 'The ID of the existing image that will be replaced. The ID can be retrieved from the response of a get request.';
            type: 'string';
          };
          imageReplaceMethod: {
            description: 'The replacement method.';
            enum: ['IMAGE_REPLACE_METHOD_UNSPECIFIED', 'CENTER_CROP'];
            type: 'string';
          };
          uri: {
            description: "The URI of the new image. The image is fetched once at insertion time and a copy is stored for display inside the document. Images must be less than 50MB, cannot exceed 25 megapixels, and must be in PNG, JPEG, or GIF format. The provided URI can't surpass 2 KB in length. The URI is saved with the image, and exposed through the ImageProperties.source_uri field.";
            type: 'string';
          };
        };
        type: 'object';
      };
      ReplaceNamedRangeContentRequest: {
        description: 'Replaces the contents of the specified NamedRange or NamedRanges with the given replacement content. Note that an individual NamedRange may consist of multiple discontinuous ranges. In this case, only the content in the first range will be replaced. The other ranges and their content will be deleted. In cases where replacing or deleting any ranges would result in an invalid document structure, a 400 bad request error is returned.';
        properties: {
          namedRangeId: {
            description: 'The ID of the named range whose content will be replaced. If there is no named range with the given ID a 400 bad request error is returned.';
            type: 'string';
          };
          namedRangeName: {
            description: 'The name of the NamedRanges whose content will be replaced. If there are multiple named ranges with the given name, then the content of each one will be replaced. If there are no named ranges with the given name, then the request will be a no-op.';
            type: 'string';
          };
          text: {
            description: 'Replaces the content of the specified named range(s) with the given text.';
            type: 'string';
          };
        };
        type: 'object';
      };
      Request: {
        description: 'A single update to apply to a document.';
        properties: {
          createFooter: {
            $ref: '#/components/schemas/CreateFooterRequest';
            description: 'Creates a footer.';
          };
          createFootnote: {
            $ref: '#/components/schemas/CreateFootnoteRequest';
            description: 'Creates a footnote.';
          };
          createHeader: {
            $ref: '#/components/schemas/CreateHeaderRequest';
            description: 'Creates a header.';
          };
          createNamedRange: {
            $ref: '#/components/schemas/CreateNamedRangeRequest';
            description: 'Creates a named range.';
          };
          createParagraphBullets: {
            $ref: '#/components/schemas/CreateParagraphBulletsRequest';
            description: 'Creates bullets for paragraphs.';
          };
          deleteContentRange: {
            $ref: '#/components/schemas/DeleteContentRangeRequest';
            description: 'Deletes content from the document.';
          };
          deleteFooter: {
            $ref: '#/components/schemas/DeleteFooterRequest';
            description: 'Deletes a footer from the document.';
          };
          deleteHeader: {
            $ref: '#/components/schemas/DeleteHeaderRequest';
            description: 'Deletes a header from the document.';
          };
          deleteNamedRange: {
            $ref: '#/components/schemas/DeleteNamedRangeRequest';
            description: 'Deletes a named range.';
          };
          deleteParagraphBullets: {
            $ref: '#/components/schemas/DeleteParagraphBulletsRequest';
            description: 'Deletes bullets from paragraphs.';
          };
          deletePositionedObject: {
            $ref: '#/components/schemas/DeletePositionedObjectRequest';
            description: 'Deletes a positioned object from the document.';
          };
          deleteTableColumn: {
            $ref: '#/components/schemas/DeleteTableColumnRequest';
            description: 'Deletes a column from a table.';
          };
          deleteTableRow: {
            $ref: '#/components/schemas/DeleteTableRowRequest';
            description: 'Deletes a row from a table.';
          };
          insertInlineImage: {
            $ref: '#/components/schemas/InsertInlineImageRequest';
            description: 'Inserts an inline image at the specified location.';
          };
          insertPageBreak: {
            $ref: '#/components/schemas/InsertPageBreakRequest';
            description: 'Inserts a page break at the specified location.';
          };
          insertSectionBreak: {
            $ref: '#/components/schemas/InsertSectionBreakRequest';
            description: 'Inserts a section break at the specified location.';
          };
          insertTable: {
            $ref: '#/components/schemas/InsertTableRequest';
            description: 'Inserts a table at the specified location.';
          };
          insertTableColumn: {
            $ref: '#/components/schemas/InsertTableColumnRequest';
            description: 'Inserts an empty column into a table.';
          };
          insertTableRow: {
            $ref: '#/components/schemas/InsertTableRowRequest';
            description: 'Inserts an empty row into a table.';
          };
          insertText: {
            $ref: '#/components/schemas/InsertTextRequest';
            description: 'Inserts text at the specified location.';
          };
          mergeTableCells: {
            $ref: '#/components/schemas/MergeTableCellsRequest';
            description: 'Merges cells in a table.';
          };
          pinTableHeaderRows: {
            $ref: '#/components/schemas/PinTableHeaderRowsRequest';
            description: 'Updates the number of pinned header rows in a table.';
          };
          replaceAllText: {
            $ref: '#/components/schemas/ReplaceAllTextRequest';
            description: 'Replaces all instances of the specified text.';
          };
          replaceImage: {
            $ref: '#/components/schemas/ReplaceImageRequest';
            description: 'Replaces an image in the document.';
          };
          replaceNamedRangeContent: {
            $ref: '#/components/schemas/ReplaceNamedRangeContentRequest';
            description: 'Replaces the content in a named range.';
          };
          unmergeTableCells: {
            $ref: '#/components/schemas/UnmergeTableCellsRequest';
            description: 'Unmerges cells in a table.';
          };
          updateDocumentStyle: {
            $ref: '#/components/schemas/UpdateDocumentStyleRequest';
            description: 'Updates the style of the document.';
          };
          updateParagraphStyle: {
            $ref: '#/components/schemas/UpdateParagraphStyleRequest';
            description: 'Updates the paragraph style at the specified range.';
          };
          updateSectionStyle: {
            $ref: '#/components/schemas/UpdateSectionStyleRequest';
            description: 'Updates the section style of the specified range.';
          };
          updateTableCellStyle: {
            $ref: '#/components/schemas/UpdateTableCellStyleRequest';
            description: 'Updates the style of table cells.';
          };
          updateTableColumnProperties: {
            $ref: '#/components/schemas/UpdateTableColumnPropertiesRequest';
            description: 'Updates the properties of columns in a table.';
          };
          updateTableRowStyle: {
            $ref: '#/components/schemas/UpdateTableRowStyleRequest';
            description: 'Updates the row style in a table.';
          };
          updateTextStyle: {
            $ref: '#/components/schemas/UpdateTextStyleRequest';
            description: 'Updates the text style at the specified range.';
          };
        };
        type: 'object';
      };
      Response: {
        description: 'A single response from an update.';
        properties: {
          createFooter: {
            $ref: '#/components/schemas/CreateFooterResponse';
            description: 'The result of creating a footer.';
          };
          createFootnote: {
            $ref: '#/components/schemas/CreateFootnoteResponse';
            description: 'The result of creating a footnote.';
          };
          createHeader: {
            $ref: '#/components/schemas/CreateHeaderResponse';
            description: 'The result of creating a header.';
          };
          createNamedRange: {
            $ref: '#/components/schemas/CreateNamedRangeResponse';
            description: 'The result of creating a named range.';
          };
          insertInlineImage: {
            $ref: '#/components/schemas/InsertInlineImageResponse';
            description: 'The result of inserting an inline image.';
          };
          insertInlineSheetsChart: {
            $ref: '#/components/schemas/InsertInlineSheetsChartResponse';
            description: 'The result of inserting an inline Google Sheets chart.';
          };
          replaceAllText: {
            $ref: '#/components/schemas/ReplaceAllTextResponse';
            description: 'The result of replacing text.';
          };
        };
        type: 'object';
      };
      RgbColor: {
        description: 'An RGB color.';
        properties: {
          blue: {
            description: 'The blue component of the color, from 0.0 to 1.0.';
            format: 'float';
            type: 'number';
          };
          green: {
            description: 'The green component of the color, from 0.0 to 1.0.';
            format: 'float';
            type: 'number';
          };
          red: {
            description: 'The red component of the color, from 0.0 to 1.0.';
            format: 'float';
            type: 'number';
          };
        };
        type: 'object';
      };
      RichLink: {
        description: 'A link to a Google resource (such as a file in Drive, a YouTube video, or a Calendar event).';
        properties: {
          richLinkId: {
            description: 'Output only. The ID of this link.';
            readOnly: true;
            type: 'string';
          };
          richLinkProperties: {
            $ref: '#/components/schemas/RichLinkProperties';
            description: 'Output only. The properties of this RichLink. This field is always present.';
            readOnly: true;
          };
          suggestedDeletionIds: {
            description: "IDs for suggestions that remove this link from the document. A RichLink might have multiple deletion IDs if, for example, multiple users suggest deleting it. If empty, then this person link isn't suggested for deletion.";
            items: {
              type: 'string';
            };
            type: 'array';
          };
          suggestedInsertionIds: {
            description: "IDs for suggestions that insert this link into the document. A RichLink might have multiple insertion IDs if it's a nested suggested change (a suggestion within a suggestion made by a different user, for example). If empty, then this person link isn't a suggested insertion.";
            items: {
              type: 'string';
            };
            type: 'array';
          };
          suggestedTextStyleChanges: {
            additionalProperties: {
              $ref: '#/components/schemas/SuggestedTextStyle';
            };
            description: 'The suggested text style changes to this RichLink, keyed by suggestion ID.';
            type: 'object';
          };
          textStyle: {
            $ref: '#/components/schemas/TextStyle';
            description: 'The text style of this RichLink.';
          };
        };
        type: 'object';
      };
      RichLinkProperties: {
        description: 'Properties specific to a RichLink.';
        properties: {
          mimeType: {
            description: "Output only. The [MIME type](https://developers.google.com/drive/api/v3/mime-types) of the RichLink, if there's one (for example, when it's a file in Drive).";
            readOnly: true;
            type: 'string';
          };
          title: {
            description: 'Output only. The title of the RichLink as displayed in the link. This title matches the title of the linked resource at the time of the insertion or last update of the link. This field is always present.';
            readOnly: true;
            type: 'string';
          };
          uri: {
            description: 'Output only. The URI to the RichLink. This is always present.';
            readOnly: true;
            type: 'string';
          };
        };
        type: 'object';
      };
      SectionBreak: {
        description: 'A StructuralElement representing a section break. A section is a range of content that has the same SectionStyle. A section break represents the start of a new section, and the section style applies to the section after the section break. The document body always begins with a section break.';
        properties: {
          sectionStyle: {
            $ref: '#/components/schemas/SectionStyle';
            description: 'The style of the section after this section break.';
          };
          suggestedDeletionIds: {
            description: 'The suggested deletion IDs. If empty, then there are no suggested deletions of this content.';
            items: {
              type: 'string';
            };
            type: 'array';
          };
          suggestedInsertionIds: {
            description: "The suggested insertion IDs. A SectionBreak may have multiple insertion IDs if it's a nested suggested change. If empty, then this is not a suggested insertion.";
            items: {
              type: 'string';
            };
            type: 'array';
          };
        };
        type: 'object';
      };
      SectionColumnProperties: {
        description: "Properties that apply to a section's column.";
        properties: {
          paddingEnd: {
            $ref: '#/components/schemas/Dimension';
            description: 'The padding at the end of the column.';
          };
          width: {
            $ref: '#/components/schemas/Dimension';
            description: 'Output only. The width of the column.';
          };
        };
        type: 'object';
      };
      SectionStyle: {
        description: 'The styling that applies to a section.';
        properties: {
          columnProperties: {
            description: "The section's columns properties. If empty, the section contains one column with the default properties in the Docs editor. A section can be updated to have no more than 3 columns. When updating this property, setting a concrete value is required. Unsetting this property will result in a 400 bad request error.";
            items: {
              $ref: '#/components/schemas/SectionColumnProperties';
            };
            type: 'array';
          };
          columnSeparatorStyle: {
            description: "The style of column separators. This style can be set even when there's one column in the section. When updating this property, setting a concrete value is required. Unsetting this property results in a 400 bad request error.";
            enum: ['COLUMN_SEPARATOR_STYLE_UNSPECIFIED', 'NONE', 'BETWEEN_EACH_COLUMN'];
            type: 'string';
          };
          contentDirection: {
            description: 'The content direction of this section. If unset, the value defaults to LEFT_TO_RIGHT. When updating this property, setting a concrete value is required. Unsetting this property results in a 400 bad request error.';
            enum: ['CONTENT_DIRECTION_UNSPECIFIED', 'LEFT_TO_RIGHT', 'RIGHT_TO_LEFT'];
            type: 'string';
          };
          defaultFooterId: {
            description: "The ID of the default footer. If unset, the value inherits from the previous SectionBreak's SectionStyle. If the value is unset in the first SectionBreak, it inherits from DocumentStyle's default_footer_id. This property is read-only.";
            type: 'string';
          };
          defaultHeaderId: {
            description: "The ID of the default header. If unset, the value inherits from the previous SectionBreak's SectionStyle. If the value is unset in the first SectionBreak, it inherits from DocumentStyle's default_header_id. This property is read-only.";
            type: 'string';
          };
          evenPageFooterId: {
            description: "The ID of the footer used only for even pages. If the value of DocumentStyle's use_even_page_header_footer is true, this value is used for the footers on even pages in the section. If it is false, the footers on even pages use the default_footer_id. If unset, the value inherits from the previous SectionBreak's SectionStyle. If the value is unset in the first SectionBreak, it inherits from DocumentStyle's even_page_footer_id. This property is read-only.";
            type: 'string';
          };
          evenPageHeaderId: {
            description: "The ID of the header used only for even pages. If the value of DocumentStyle's use_even_page_header_footer is true, this value is used for the headers on even pages in the section. If it is false, the headers on even pages use the default_header_id. If unset, the value inherits from the previous SectionBreak's SectionStyle. If the value is unset in the first SectionBreak, it inherits from DocumentStyle's even_page_header_id. This property is read-only.";
            type: 'string';
          };
          firstPageFooterId: {
            description: "The ID of the footer used only for the first page of the section. If use_first_page_header_footer is true, this value is used for the footer on the first page of the section. If it's false, the footer on the first page of the section uses the default_footer_id. If unset, the value inherits from the previous SectionBreak's SectionStyle. If the value is unset in the first SectionBreak, it inherits from DocumentStyle's first_page_footer_id. This property is read-only.";
            type: 'string';
          };
          firstPageHeaderId: {
            description: "The ID of the header used only for the first page of the section. If use_first_page_header_footer is true, this value is used for the header on the first page of the section. If it's false, the header on the first page of the section uses the default_header_id. If unset, the value inherits from the previous SectionBreak's SectionStyle. If the value is unset in the first SectionBreak, it inherits from DocumentStyle's first_page_header_id. This property is read-only.";
            type: 'string';
          };
          flipPageOrientation: {
            description: "Optional. Indicates whether to flip the dimensions of DocumentStyle's page_size for this section, which allows changing the page orientation between portrait and landscape. If unset, the value inherits from DocumentStyle's flip_page_orientation. When updating this property, setting a concrete value is required. Unsetting this property results in a 400 bad request error.";
            type: 'boolean';
          };
          marginBottom: {
            $ref: '#/components/schemas/Dimension';
            description: 'The bottom page margin of the section. If unset, the value defaults to margin_bottom from DocumentStyle. When updating this property, setting a concrete value is required. Unsetting this property results in a 400 bad request error.';
          };
          marginFooter: {
            $ref: '#/components/schemas/Dimension';
            description: 'The footer margin of the section. If unset, the value defaults to margin_footer from DocumentStyle. If updated, use_custom_header_footer_margins is set to true on DocumentStyle. The value of use_custom_header_footer_margins on DocumentStyle indicates if a footer margin is being respected for this section When updating this property, setting a concrete value is required. Unsetting this property results in a 400 bad request error.';
          };
          marginHeader: {
            $ref: '#/components/schemas/Dimension';
            description: 'The header margin of the section. If unset, the value defaults to margin_header from DocumentStyle. If updated, use_custom_header_footer_margins is set to true on DocumentStyle. The value of use_custom_header_footer_margins on DocumentStyle indicates if a header margin is being respected for this section. When updating this property, setting a concrete value is required. Unsetting this property results in a 400 bad request error.';
          };
          marginLeft: {
            $ref: '#/components/schemas/Dimension';
            description: "The left page margin of the section. If unset, the value defaults to margin_left from DocumentStyle. Updating the left margin causes columns in this section to resize. Since the margin affects column width, it's applied before column properties. When updating this property, setting a concrete value is required. Unsetting this property results in a 400 bad request error.";
          };
          marginRight: {
            $ref: '#/components/schemas/Dimension';
            description: "The right page margin of the section. If unset, the value defaults to margin_right from DocumentStyle. Updating the right margin causes columns in this section to resize. Since the margin affects column width, it's applied before column properties. When updating this property, setting a concrete value is required. Unsetting this property results in a 400 bad request error.";
          };
          marginTop: {
            $ref: '#/components/schemas/Dimension';
            description: 'The top page margin of the section. If unset, the value defaults to margin_top from DocumentStyle. When updating this property, setting a concrete value is required. Unsetting this property results in a 400 bad request error.';
          };
          pageNumberStart: {
            description: "The page number from which to start counting the number of pages for this section. If unset, page numbering continues from the previous section. If the value is unset in the first SectionBreak, refer to DocumentStyle's page_number_start. When updating this property, setting a concrete value is required. Unsetting this property results in a 400 bad request error.";
            format: 'int32';
            type: 'integer';
          };
          sectionType: {
            description: 'Output only. The type of section.';
            enum: ['SECTION_TYPE_UNSPECIFIED', 'CONTINUOUS', 'NEXT_PAGE'];
            type: 'string';
          };
          useFirstPageHeaderFooter: {
            description: "Indicates whether to use the first page header / footer IDs for the first page of the section. If unset, it inherits from DocumentStyle's use_first_page_header_footer for the first section. If the value is unset for subsequent sectors, it should be interpreted as false. When updating this property, setting a concrete value is required. Unsetting this property results in a 400 bad request error.";
            type: 'boolean';
          };
        };
        type: 'object';
      };
      Shading: {
        description: 'The shading of a paragraph.';
        properties: {
          backgroundColor: {
            $ref: '#/components/schemas/OptionalColor';
            description: 'The background color of this paragraph shading.';
          };
        };
        type: 'object';
      };
      ShadingSuggestionState: {
        description: "A mask that indicates which of the fields on the base Shading have been changed in this suggested change. For any field set to true, there's a new suggested value.";
        properties: {
          backgroundColorSuggested: {
            description: 'Indicates if there was a suggested change to the Shading.';
            type: 'boolean';
          };
        };
        type: 'object';
      };
      SheetsChartReference: {
        description: 'A reference to a linked chart embedded from Google Sheets.';
        properties: {
          chartId: {
            description: "The ID of the specific chart in the Google Sheets spreadsheet that's embedded.";
            format: 'int32';
            type: 'integer';
          };
          spreadsheetId: {
            description: 'The ID of the Google Sheets spreadsheet that contains the source chart.';
            type: 'string';
          };
        };
        type: 'object';
      };
      SheetsChartReferenceSuggestionState: {
        description: "A mask that indicates which of the fields on the base SheetsChartReference have been changed in this suggestion. For any field set to true, there's a new suggested value.";
        properties: {
          chartIdSuggested: {
            description: 'Indicates if there was a suggested change to chart_id.';
            type: 'boolean';
          };
          spreadsheetIdSuggested: {
            description: 'Indicates if there was a suggested change to spreadsheet_id.';
            type: 'boolean';
          };
        };
        type: 'object';
      };
      Size: {
        description: 'A width and height.';
        properties: {
          height: {
            $ref: '#/components/schemas/Dimension';
            description: 'The height of the object.';
          };
          width: {
            $ref: '#/components/schemas/Dimension';
            description: 'The width of the object.';
          };
        };
        type: 'object';
      };
      SizeSuggestionState: {
        description: 'A mask that indicates which of the fields on the base Size have been changed in this suggestion. For any field set to true, the Size has a new suggested value.';
        properties: {
          heightSuggested: {
            description: 'Indicates if there was a suggested change to height.';
            type: 'boolean';
          };
          widthSuggested: {
            description: 'Indicates if there was a suggested change to width.';
            type: 'boolean';
          };
        };
        type: 'object';
      };
      StructuralElement: {
        description: 'A StructuralElement describes content that provides structure to the document.';
        properties: {
          endIndex: {
            description: 'The zero-based end index of this structural element, exclusive, in UTF-16 code units.';
            format: 'int32';
            type: 'integer';
          };
          paragraph: {
            $ref: '#/components/schemas/Paragraph';
            description: 'A paragraph type of structural element.';
          };
          sectionBreak: {
            $ref: '#/components/schemas/SectionBreak';
            description: 'A section break type of structural element.';
          };
          startIndex: {
            description: 'The zero-based start index of this structural element, in UTF-16 code units.';
            format: 'int32';
            type: 'integer';
          };
          table: {
            $ref: '#/components/schemas/Table';
            description: 'A table type of structural element.';
          };
          tableOfContents: {
            $ref: '#/components/schemas/TableOfContents';
            description: 'A table of contents type of structural element.';
          };
        };
        type: 'object';
      };
      SubstringMatchCriteria: {
        description: 'A criteria that matches a specific string of text in the document.';
        properties: {
          matchCase: {
            description: 'Indicates whether the search should respect case: - `True`: the search is case sensitive. - `False`: the search is case insensitive.';
            type: 'boolean';
          };
          text: {
            description: 'The text to search for in the document.';
            type: 'string';
          };
        };
        type: 'object';
      };
      SuggestedBullet: {
        description: 'A suggested change to a Bullet.';
        properties: {
          bullet: {
            $ref: '#/components/schemas/Bullet';
            description: 'A Bullet that only includes the changes made in this suggestion. This can be used along with the bullet_suggestion_state to see which fields have changed and their new values.';
          };
          bulletSuggestionState: {
            $ref: '#/components/schemas/BulletSuggestionState';
            description: 'A mask that indicates which of the fields on the base Bullet have been changed in this suggestion.';
          };
        };
        type: 'object';
      };
      SuggestedDocumentStyle: {
        description: 'A suggested change to the DocumentStyle.';
        properties: {
          documentStyle: {
            $ref: '#/components/schemas/DocumentStyle';
            description: 'A DocumentStyle that only includes the changes made in this suggestion. This can be used along with the document_style_suggestion_state to see which fields have changed and their new values.';
          };
          documentStyleSuggestionState: {
            $ref: '#/components/schemas/DocumentStyleSuggestionState';
            description: 'A mask that indicates which of the fields on the base DocumentStyle have been changed in this suggestion.';
          };
        };
        type: 'object';
      };
      SuggestedInlineObjectProperties: {
        description: 'A suggested change to InlineObjectProperties.';
        properties: {
          inlineObjectProperties: {
            $ref: '#/components/schemas/InlineObjectProperties';
            description: 'An InlineObjectProperties that only includes the changes made in this suggestion. This can be used along with the inline_object_properties_suggestion_state to see which fields have changed and their new values.';
          };
          inlineObjectPropertiesSuggestionState: {
            $ref: '#/components/schemas/InlineObjectPropertiesSuggestionState';
            description: 'A mask that indicates which of the fields on the base InlineObjectProperties have been changed in this suggestion.';
          };
        };
        type: 'object';
      };
      SuggestedListProperties: {
        description: 'A suggested change to ListProperties.';
        properties: {
          listProperties: {
            $ref: '#/components/schemas/ListProperties';
            description: 'A ListProperties that only includes the changes made in this suggestion. This can be used along with the list_properties_suggestion_state to see which fields have changed and their new values.';
          };
          listPropertiesSuggestionState: {
            $ref: '#/components/schemas/ListPropertiesSuggestionState';
            description: 'A mask that indicates which of the fields on the base ListProperties have been changed in this suggestion.';
          };
        };
        type: 'object';
      };
      SuggestedNamedStyles: {
        description: 'A suggested change to the NamedStyles.';
        properties: {
          namedStyles: {
            $ref: '#/components/schemas/NamedStyles';
            description: 'A NamedStyles that only includes the changes made in this suggestion. This can be used along with the named_styles_suggestion_state to see which fields have changed and their new values.';
          };
          namedStylesSuggestionState: {
            $ref: '#/components/schemas/NamedStylesSuggestionState';
            description: 'A mask that indicates which of the fields on the base NamedStyles have been changed in this suggestion.';
          };
        };
        type: 'object';
      };
      SuggestedParagraphStyle: {
        description: 'A suggested change to a ParagraphStyle.';
        properties: {
          paragraphStyle: {
            $ref: '#/components/schemas/ParagraphStyle';
            description: 'A ParagraphStyle that only includes the changes made in this suggestion. This can be used along with the paragraph_style_suggestion_state to see which fields have changed and their new values.';
          };
          paragraphStyleSuggestionState: {
            $ref: '#/components/schemas/ParagraphStyleSuggestionState';
            description: 'A mask that indicates which of the fields on the base ParagraphStyle have been changed in this suggestion.';
          };
        };
        type: 'object';
      };
      SuggestedPositionedObjectProperties: {
        description: 'A suggested change to PositionedObjectProperties.';
        properties: {
          positionedObjectProperties: {
            $ref: '#/components/schemas/PositionedObjectProperties';
            description: 'A PositionedObjectProperties that only includes the changes made in this suggestion. This can be used along with the positioned_object_properties_suggestion_state to see which fields have changed and their new values.';
          };
          positionedObjectPropertiesSuggestionState: {
            $ref: '#/components/schemas/PositionedObjectPropertiesSuggestionState';
            description: 'A mask that indicates which of the fields on the base PositionedObjectProperties have been changed in this suggestion.';
          };
        };
        type: 'object';
      };
      SuggestedTableCellStyle: {
        description: 'A suggested change to a TableCellStyle.';
        properties: {
          tableCellStyle: {
            $ref: '#/components/schemas/TableCellStyle';
            description: 'A TableCellStyle that only includes the changes made in this suggestion. This can be used along with the table_cell_style_suggestion_state to see which fields have changed and their new values.';
          };
          tableCellStyleSuggestionState: {
            $ref: '#/components/schemas/TableCellStyleSuggestionState';
            description: 'A mask that indicates which of the fields on the base TableCellStyle have been changed in this suggestion.';
          };
        };
        type: 'object';
      };
      SuggestedTableRowStyle: {
        description: 'A suggested change to a TableRowStyle.';
        properties: {
          tableRowStyle: {
            $ref: '#/components/schemas/TableRowStyle';
            description: 'A TableRowStyle that only includes the changes made in this suggestion. This can be used along with the table_row_style_suggestion_state to see which fields have changed and their new values.';
          };
          tableRowStyleSuggestionState: {
            $ref: '#/components/schemas/TableRowStyleSuggestionState';
            description: 'A mask that indicates which of the fields on the base TableRowStyle have been changed in this suggestion.';
          };
        };
        type: 'object';
      };
      SuggestedTextStyle: {
        description: 'A suggested change to a TextStyle.';
        properties: {
          textStyle: {
            $ref: '#/components/schemas/TextStyle';
            description: 'A TextStyle that only includes the changes made in this suggestion. This can be used along with the text_style_suggestion_state to see which fields have changed and their new values.';
          };
          textStyleSuggestionState: {
            $ref: '#/components/schemas/TextStyleSuggestionState';
            description: 'A mask that indicates which of the fields on the base TextStyle have been changed in this suggestion.';
          };
        };
        type: 'object';
      };
      TabStop: {
        description: 'A tab stop within a paragraph.';
        properties: {
          alignment: {
            description: 'The alignment of this tab stop. If unset, the value defaults to START.';
            enum: ['TAB_STOP_ALIGNMENT_UNSPECIFIED', 'START', 'CENTER', 'END'];
            type: 'string';
          };
          offset: {
            $ref: '#/components/schemas/Dimension';
            description: 'The offset between this tab stop and the start margin.';
          };
        };
        type: 'object';
      };
      Table: {
        description: 'A StructuralElement representing a table.';
        properties: {
          columns: {
            description: "Number of columns in the table. It's possible for a table to be non-rectangular, so some rows may have a different number of cells.";
            format: 'int32';
            type: 'integer';
          };
          rows: {
            description: 'Number of rows in the table.';
            format: 'int32';
            type: 'integer';
          };
          suggestedDeletionIds: {
            description: 'The suggested deletion IDs. If empty, then there are no suggested deletions of this content.';
            items: {
              type: 'string';
            };
            type: 'array';
          };
          suggestedInsertionIds: {
            description: "The suggested insertion IDs. A Table may have multiple insertion IDs if it's a nested suggested change. If empty, then this is not a suggested insertion.";
            items: {
              type: 'string';
            };
            type: 'array';
          };
          tableRows: {
            description: 'The contents and style of each row.';
            items: {
              $ref: '#/components/schemas/TableRow';
            };
            type: 'array';
          };
          tableStyle: {
            $ref: '#/components/schemas/TableStyle';
            description: 'The style of the table.';
          };
        };
        type: 'object';
      };
      TableCell: {
        description: 'The contents and style of a cell in a Table.';
        properties: {
          content: {
            description: 'The content of the cell.';
            items: {
              $ref: '#/components/schemas/StructuralElement';
            };
            type: 'array';
          };
          endIndex: {
            description: 'The zero-based end index of this cell, exclusive, in UTF-16 code units.';
            format: 'int32';
            type: 'integer';
          };
          startIndex: {
            description: 'The zero-based start index of this cell, in UTF-16 code units.';
            format: 'int32';
            type: 'integer';
          };
          suggestedDeletionIds: {
            description: 'The suggested deletion IDs. If empty, then there are no suggested deletions of this content.';
            items: {
              type: 'string';
            };
            type: 'array';
          };
          suggestedInsertionIds: {
            description: "The suggested insertion IDs. A TableCell may have multiple insertion IDs if it's a nested suggested change. If empty, then this is not a suggested insertion.";
            items: {
              type: 'string';
            };
            type: 'array';
          };
          suggestedTableCellStyleChanges: {
            additionalProperties: {
              $ref: '#/components/schemas/SuggestedTableCellStyle';
            };
            description: 'The suggested changes to the table cell style, keyed by suggestion ID.';
            type: 'object';
          };
          tableCellStyle: {
            $ref: '#/components/schemas/TableCellStyle';
            description: 'The style of the cell.';
          };
        };
        type: 'object';
      };
      TableCellBorder: {
        description: 'A border around a table cell. Table cell borders cannot be transparent. To hide a table cell border, make its width 0.';
        properties: {
          color: {
            $ref: '#/components/schemas/OptionalColor';
            description: 'The color of the border. This color cannot be transparent.';
          };
          dashStyle: {
            description: 'The dash style of the border.';
            enum: ['DASH_STYLE_UNSPECIFIED', 'SOLID', 'DOT', 'DASH'];
            type: 'string';
          };
          width: {
            $ref: '#/components/schemas/Dimension';
            description: 'The width of the border.';
          };
        };
        type: 'object';
      };
      TableCellLocation: {
        description: 'Location of a single cell within a table.';
        properties: {
          columnIndex: {
            description: 'The zero-based column index. For example, the second column in the table has a column index of 1.';
            format: 'int32';
            type: 'integer';
          };
          rowIndex: {
            description: 'The zero-based row index. For example, the second row in the table has a row index of 1.';
            format: 'int32';
            type: 'integer';
          };
          tableStartLocation: {
            $ref: '#/components/schemas/Location';
            description: 'The location where the table starts in the document.';
          };
        };
        type: 'object';
      };
      TableCellStyle: {
        description: "The style of a TableCell. Inherited table cell styles are represented as unset fields in this message. A table cell style can inherit from the table's style.";
        properties: {
          backgroundColor: {
            $ref: '#/components/schemas/OptionalColor';
            description: 'The background color of the cell.';
          };
          borderBottom: {
            $ref: '#/components/schemas/TableCellBorder';
            description: 'The bottom border of the cell.';
          };
          borderLeft: {
            $ref: '#/components/schemas/TableCellBorder';
            description: 'The left border of the cell.';
          };
          borderRight: {
            $ref: '#/components/schemas/TableCellBorder';
            description: 'The right border of the cell.';
          };
          borderTop: {
            $ref: '#/components/schemas/TableCellBorder';
            description: 'The top border of the cell.';
          };
          columnSpan: {
            description: 'The column span of the cell. This property is read-only.';
            format: 'int32';
            type: 'integer';
          };
          contentAlignment: {
            description: 'The alignment of the content in the table cell. The default alignment matches the alignment for newly created table cells in the Docs editor.';
            enum: ['CONTENT_ALIGNMENT_UNSPECIFIED', 'CONTENT_ALIGNMENT_UNSUPPORTED', 'TOP', 'MIDDLE', 'BOTTOM'];
            type: 'string';
          };
          paddingBottom: {
            $ref: '#/components/schemas/Dimension';
            description: 'The bottom padding of the cell.';
          };
          paddingLeft: {
            $ref: '#/components/schemas/Dimension';
            description: 'The left padding of the cell.';
          };
          paddingRight: {
            $ref: '#/components/schemas/Dimension';
            description: 'The right padding of the cell.';
          };
          paddingTop: {
            $ref: '#/components/schemas/Dimension';
            description: 'The top padding of the cell.';
          };
          rowSpan: {
            description: 'The row span of the cell. This property is read-only.';
            format: 'int32';
            type: 'integer';
          };
        };
        type: 'object';
      };
      TableCellStyleSuggestionState: {
        description: "A mask that indicates which of the fields on the base TableCellStyle have been changed in this suggestion. For any field set to true, there's a new suggested value.";
        properties: {
          backgroundColorSuggested: {
            description: 'Indicates if there was a suggested change to background_color.';
            type: 'boolean';
          };
          borderBottomSuggested: {
            description: 'Indicates if there was a suggested change to border_bottom.';
            type: 'boolean';
          };
          borderLeftSuggested: {
            description: 'Indicates if there was a suggested change to border_left.';
            type: 'boolean';
          };
          borderRightSuggested: {
            description: 'Indicates if there was a suggested change to border_right.';
            type: 'boolean';
          };
          borderTopSuggested: {
            description: 'Indicates if there was a suggested change to border_top.';
            type: 'boolean';
          };
          columnSpanSuggested: {
            description: 'Indicates if there was a suggested change to column_span.';
            type: 'boolean';
          };
          contentAlignmentSuggested: {
            description: 'Indicates if there was a suggested change to content_alignment.';
            type: 'boolean';
          };
          paddingBottomSuggested: {
            description: 'Indicates if there was a suggested change to padding_bottom.';
            type: 'boolean';
          };
          paddingLeftSuggested: {
            description: 'Indicates if there was a suggested change to padding_left.';
            type: 'boolean';
          };
          paddingRightSuggested: {
            description: 'Indicates if there was a suggested change to padding_right.';
            type: 'boolean';
          };
          paddingTopSuggested: {
            description: 'Indicates if there was a suggested change to padding_top.';
            type: 'boolean';
          };
          rowSpanSuggested: {
            description: 'Indicates if there was a suggested change to row_span.';
            type: 'boolean';
          };
        };
        type: 'object';
      };
      TableColumnProperties: {
        description: 'The properties of a column in a table.';
        properties: {
          width: {
            $ref: '#/components/schemas/Dimension';
            description: "The width of the column. Set when the column's `width_type` is FIXED_WIDTH.";
          };
          widthType: {
            description: 'The width type of the column.';
            enum: ['WIDTH_TYPE_UNSPECIFIED', 'EVENLY_DISTRIBUTED', 'FIXED_WIDTH'];
            type: 'string';
          };
        };
        type: 'object';
      };
      TableOfContents: {
        description: 'A StructuralElement representing a table of contents.';
        properties: {
          content: {
            description: 'The content of the table of contents.';
            items: {
              $ref: '#/components/schemas/StructuralElement';
            };
            type: 'array';
          };
          suggestedDeletionIds: {
            description: 'The suggested deletion IDs. If empty, then there are no suggested deletions of this content.';
            items: {
              type: 'string';
            };
            type: 'array';
          };
          suggestedInsertionIds: {
            description: 'The suggested insertion IDs. A TableOfContents may have multiple insertion IDs if it is a nested suggested change. If empty, then this is not a suggested insertion.';
            items: {
              type: 'string';
            };
            type: 'array';
          };
        };
        type: 'object';
      };
      TableRange: {
        description: "A table range represents a reference to a subset of a table. It's important to note that the cells specified by a table range do not necessarily form a rectangle. For example, let's say we have a 3 x 3 table where all the cells of the last row are merged together. The table looks like this: [ ] A table range with table cell location = (table_start_location, row = 0, column = 0), row span = 3 and column span = 2 specifies the following cells: x x [ x x x ]";
        properties: {
          columnSpan: {
            description: 'The column span of the table range.';
            format: 'int32';
            type: 'integer';
          };
          rowSpan: {
            description: 'The row span of the table range.';
            format: 'int32';
            type: 'integer';
          };
          tableCellLocation: {
            $ref: '#/components/schemas/TableCellLocation';
            description: 'The cell location where the table range starts.';
          };
        };
        type: 'object';
      };
      TableRow: {
        description: 'The contents and style of a row in a Table.';
        properties: {
          endIndex: {
            description: 'The zero-based end index of this row, exclusive, in UTF-16 code units.';
            format: 'int32';
            type: 'integer';
          };
          startIndex: {
            description: 'The zero-based start index of this row, in UTF-16 code units.';
            format: 'int32';
            type: 'integer';
          };
          suggestedDeletionIds: {
            description: 'The suggested deletion IDs. If empty, then there are no suggested deletions of this content.';
            items: {
              type: 'string';
            };
            type: 'array';
          };
          suggestedInsertionIds: {
            description: "The suggested insertion IDs. A TableRow may have multiple insertion IDs if it's a nested suggested change. If empty, then this is not a suggested insertion.";
            items: {
              type: 'string';
            };
            type: 'array';
          };
          suggestedTableRowStyleChanges: {
            additionalProperties: {
              $ref: '#/components/schemas/SuggestedTableRowStyle';
            };
            description: 'The suggested style changes to this row, keyed by suggestion ID.';
            type: 'object';
          };
          tableCells: {
            description: "The contents and style of each cell in this row. It's possible for a table to be non-rectangular, so some rows may have a different number of cells than other rows in the same table.";
            items: {
              $ref: '#/components/schemas/TableCell';
            };
            type: 'array';
          };
          tableRowStyle: {
            $ref: '#/components/schemas/TableRowStyle';
            description: 'The style of the table row.';
          };
        };
        type: 'object';
      };
      TableRowStyle: {
        description: 'Styles that apply to a table row.';
        properties: {
          minRowHeight: {
            $ref: '#/components/schemas/Dimension';
            description: "The minimum height of the row. The row will be rendered in the Docs editor at a height equal to or greater than this value in order to show all the content in the row's cells.";
          };
          preventOverflow: {
            description: 'Whether the row cannot overflow across page or column boundaries.';
            type: 'boolean';
          };
          tableHeader: {
            description: 'Whether the row is a table header.';
            type: 'boolean';
          };
        };
        type: 'object';
      };
      TableRowStyleSuggestionState: {
        description: "A mask that indicates which of the fields on the base TableRowStyle have been changed in this suggestion. For any field set to true, there's a new suggested value.";
        properties: {
          minRowHeightSuggested: {
            description: 'Indicates if there was a suggested change to min_row_height.';
            type: 'boolean';
          };
        };
        type: 'object';
      };
      TableStyle: {
        description: 'Styles that apply to a table.';
        properties: {
          tableColumnProperties: {
            description: "The properties of each column. Note that in Docs, tables contain rows and rows contain cells, similar to HTML. So the properties for a row can be found on the row's table_row_style.";
            items: {
              $ref: '#/components/schemas/TableColumnProperties';
            };
            type: 'array';
          };
        };
        type: 'object';
      };
      TextRun: {
        description: 'A ParagraphElement that represents a run of text that all has the same styling.';
        properties: {
          content: {
            description: 'The text of this run. Any non-text elements in the run are replaced with the Unicode character U+E907.';
            type: 'string';
          };
          suggestedDeletionIds: {
            description: 'The suggested deletion IDs. If empty, then there are no suggested deletions of this content.';
            items: {
              type: 'string';
            };
            type: 'array';
          };
          suggestedInsertionIds: {
            description: "The suggested insertion IDs. A TextRun may have multiple insertion IDs if it's a nested suggested change. If empty, then this is not a suggested insertion.";
            items: {
              type: 'string';
            };
            type: 'array';
          };
          suggestedTextStyleChanges: {
            additionalProperties: {
              $ref: '#/components/schemas/SuggestedTextStyle';
            };
            description: 'The suggested text style changes to this run, keyed by suggestion ID.';
            type: 'object';
          };
          textStyle: {
            $ref: '#/components/schemas/TextStyle';
            description: 'The text style of this run.';
          };
        };
        type: 'object';
      };
      TextStyle: {
        description: "Represents the styling that can be applied to text. Inherited text styles are represented as unset fields in this message. A text style's parent depends on where the text style is defined: * The TextStyle of text in a Paragraph inherits from the paragraph's corresponding named style type. * The TextStyle on a named style inherits from the normal text named style. * The TextStyle of the normal text named style inherits from the default text style in the Docs editor. * The TextStyle on a Paragraph element that's contained in a table may inherit its text style from the table style. If the text style does not inherit from a parent, unsetting fields will revert the style to a value matching the defaults in the Docs editor.";
        properties: {
          backgroundColor: {
            $ref: '#/components/schemas/OptionalColor';
            description: 'The background color of the text. If set, the color is either an RGB color or transparent, depending on the `color` field.';
          };
          baselineOffset: {
            description: "The text's vertical offset from its normal position. Text with `SUPERSCRIPT` or `SUBSCRIPT` baseline offsets is automatically rendered in a smaller font size, computed based on the `font_size` field. Changes in this field don't affect the `font_size`.";
            enum: ['BASELINE_OFFSET_UNSPECIFIED', 'NONE', 'SUPERSCRIPT', 'SUBSCRIPT'];
            type: 'string';
          };
          bold: {
            description: 'Whether or not the text is rendered as bold.';
            type: 'boolean';
          };
          fontSize: {
            $ref: '#/components/schemas/Dimension';
            description: "The size of the text's font.";
          };
          foregroundColor: {
            $ref: '#/components/schemas/OptionalColor';
            description: 'The foreground color of the text. If set, the color is either an RGB color or transparent, depending on the `color` field.';
          };
          italic: {
            description: 'Whether or not the text is italicized.';
            type: 'boolean';
          };
          link: {
            $ref: '#/components/schemas/Link';
            description: 'The hyperlink destination of the text. If unset, there\'s no link. Links are not inherited from parent text. Changing the link in an update request causes some other changes to the text style of the range: * When setting a link, the text foreground color will be updated to the default link color and the text will be underlined. If these fields are modified in the same request, those values will be used instead of the link defaults. * Setting a link on a text range that overlaps with an existing link will also update the existing link to point to the new URL. * Links are not settable on newline characters. As a result, setting a link on a text range that crosses a paragraph boundary, such as `"ABC\\n123"`, will separate the newline character(s) into their own text runs. The link will be applied separately to the runs before and after the newline. * Removing a link will update the text style of the range to match the style of the preceding text (or the default text styles if the preceding text is another link) unless different styles are being set in the same request.';
          };
          smallCaps: {
            description: 'Whether or not the text is in small capital letters.';
            type: 'boolean';
          };
          strikethrough: {
            description: 'Whether or not the text is struck through.';
            type: 'boolean';
          };
          underline: {
            description: 'Whether or not the text is underlined.';
            type: 'boolean';
          };
          weightedFontFamily: {
            $ref: '#/components/schemas/WeightedFontFamily';
            description: 'The font family and rendered weight of the text. If an update request specifies values for both `weighted_font_family` and `bold`, the `weighted_font_family` is applied first, then `bold`. If `weighted_font_family#weight` is not set, it defaults to `400`. If `weighted_font_family` is set, then `weighted_font_family#font_family` must also be set with a non-empty value. Otherwise, a 400 bad request error is returned.';
          };
        };
        type: 'object';
      };
      TextStyleSuggestionState: {
        description: "A mask that indicates which of the fields on the base TextStyle have been changed in this suggestion. For any field set to true, there's a new suggested value.";
        properties: {
          backgroundColorSuggested: {
            description: 'Indicates if there was a suggested change to background_color.';
            type: 'boolean';
          };
          baselineOffsetSuggested: {
            description: 'Indicates if there was a suggested change to baseline_offset.';
            type: 'boolean';
          };
          boldSuggested: {
            description: 'Indicates if there was a suggested change to bold.';
            type: 'boolean';
          };
          fontSizeSuggested: {
            description: 'Indicates if there was a suggested change to font_size.';
            type: 'boolean';
          };
          foregroundColorSuggested: {
            description: 'Indicates if there was a suggested change to foreground_color.';
            type: 'boolean';
          };
          italicSuggested: {
            description: 'Indicates if there was a suggested change to italic.';
            type: 'boolean';
          };
          linkSuggested: {
            description: 'Indicates if there was a suggested change to link.';
            type: 'boolean';
          };
          smallCapsSuggested: {
            description: 'Indicates if there was a suggested change to small_caps.';
            type: 'boolean';
          };
          strikethroughSuggested: {
            description: 'Indicates if there was a suggested change to strikethrough.';
            type: 'boolean';
          };
          underlineSuggested: {
            description: 'Indicates if there was a suggested change to underline.';
            type: 'boolean';
          };
          weightedFontFamilySuggested: {
            description: 'Indicates if there was a suggested change to weighted_font_family.';
            type: 'boolean';
          };
        };
        type: 'object';
      };
      UnmergeTableCellsRequest: {
        description: 'Unmerges cells in a Table.';
        properties: {
          tableRange: {
            $ref: '#/components/schemas/TableRange';
            description: 'The table range specifying which cells of the table to unmerge. All merged cells in this range will be unmerged, and cells that are already unmerged will not be affected. If the range has no merged cells, the request will do nothing. If there is text in any of the merged cells, the text will remain in the "head" cell of the resulting block of unmerged cells. The "head" cell is the upper-left cell when the content direction is from left to right, and the upper-right otherwise.';
          };
        };
        type: 'object';
      };
      UpdateDocumentStyleRequest: {
        description: 'Updates the DocumentStyle.';
        properties: {
          documentStyle: {
            $ref: '#/components/schemas/DocumentStyle';
            description: 'The styles to set on the document. Certain document style changes may cause other changes in order to mirror the behavior of the Docs editor. See the documentation of DocumentStyle for more information.';
          };
          fields: {
            description: 'The fields that should be updated. At least one field must be specified. The root `document_style` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the background, set `fields` to `"background"`.';
            format: 'google-fieldmask';
            type: 'string';
          };
        };
        type: 'object';
      };
      UpdateParagraphStyleRequest: {
        description: 'Update the styling of all paragraphs that overlap with the given range.';
        properties: {
          fields: {
            description: 'The fields that should be updated. At least one field must be specified. The root `paragraph_style` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example, to update the paragraph style\'s alignment property, set `fields` to `"alignment"`. To reset a property to its default value, include its field name in the field mask but leave the field itself unset.';
            format: 'google-fieldmask';
            type: 'string';
          };
          paragraphStyle: {
            $ref: '#/components/schemas/ParagraphStyle';
            description: 'The styles to set on the paragraphs. Certain paragraph style changes may cause other changes in order to mirror the behavior of the Docs editor. See the documentation of ParagraphStyle for more information.';
          };
          range: {
            $ref: '#/components/schemas/Range';
            description: 'The range overlapping the paragraphs to style.';
          };
        };
        type: 'object';
      };
      UpdateSectionStyleRequest: {
        description: 'Updates the SectionStyle.';
        properties: {
          fields: {
            description: 'The fields that should be updated. At least one field must be specified. The root `section_style` is implied and must not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the left margin, set `fields` to `"margin_left"`.';
            format: 'google-fieldmask';
            type: 'string';
          };
          range: {
            $ref: '#/components/schemas/Range';
            description: 'The range overlapping the sections to style. Because section breaks can only be inserted inside the body, the segment ID field must be empty.';
          };
          sectionStyle: {
            $ref: '#/components/schemas/SectionStyle';
            description: 'The styles to be set on the section. Certain section style changes may cause other changes in order to mirror the behavior of the Docs editor. See the documentation of SectionStyle for more information.';
          };
        };
        type: 'object';
      };
      UpdateTableCellStyleRequest: {
        description: 'Updates the style of a range of table cells.';
        properties: {
          fields: {
            description: 'The fields that should be updated. At least one field must be specified. The root `tableCellStyle` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the table cell background color, set `fields` to `"backgroundColor"`. To reset a property to its default value, include its field name in the field mask but leave the field itself unset.';
            format: 'google-fieldmask';
            type: 'string';
          };
          tableCellStyle: {
            $ref: '#/components/schemas/TableCellStyle';
            description: 'The style to set on the table cells. When updating borders, if a cell shares a border with an adjacent cell, the corresponding border property of the adjacent cell is updated as well. Borders that are merged and invisible are not updated. Since updating a border shared by adjacent cells in the same request can cause conflicting border updates, border updates are applied in the following order: - `border_right` - `border_left` - `border_bottom` - `border_top`';
          };
          tableRange: {
            $ref: '#/components/schemas/TableRange';
            description: 'The table range representing the subset of the table to which the updates are applied.';
          };
          tableStartLocation: {
            $ref: '#/components/schemas/Location';
            description: 'The location where the table starts in the document. When specified, the updates are applied to all the cells in the table.';
          };
        };
        type: 'object';
      };
      UpdateTableColumnPropertiesRequest: {
        description: 'Updates the TableColumnProperties of columns in a table.';
        properties: {
          columnIndices: {
            description: 'The list of zero-based column indices whose property should be updated. If no indices are specified, all columns will be updated.';
            items: {
              format: 'int32';
              type: 'integer';
            };
            type: 'array';
          };
          fields: {
            description: 'The fields that should be updated. At least one field must be specified. The root `tableColumnProperties` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the column width, set `fields` to `"width"`.';
            format: 'google-fieldmask';
            type: 'string';
          };
          tableColumnProperties: {
            $ref: '#/components/schemas/TableColumnProperties';
            description: 'The table column properties to update. If the value of `table_column_properties#width` is less than 5 points (5/72 inch), a 400 bad request error is returned.';
          };
          tableStartLocation: {
            $ref: '#/components/schemas/Location';
            description: 'The location where the table starts in the document.';
          };
        };
        type: 'object';
      };
      UpdateTableRowStyleRequest: {
        description: 'Updates the TableRowStyle of rows in a table.';
        properties: {
          fields: {
            description: 'The fields that should be updated. At least one field must be specified. The root `tableRowStyle` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example to update the minimum row height, set `fields` to `"min_row_height"`.';
            format: 'google-fieldmask';
            type: 'string';
          };
          rowIndices: {
            description: 'The list of zero-based row indices whose style should be updated. If no indices are specified, all rows will be updated.';
            items: {
              format: 'int32';
              type: 'integer';
            };
            type: 'array';
          };
          tableRowStyle: {
            $ref: '#/components/schemas/TableRowStyle';
            description: 'The styles to be set on the rows.';
          };
          tableStartLocation: {
            $ref: '#/components/schemas/Location';
            description: 'The location where the table starts in the document.';
          };
        };
        type: 'object';
      };
      UpdateTextStyleRequest: {
        description: 'Update the styling of text.';
        properties: {
          fields: {
            description: 'The fields that should be updated. At least one field must be specified. The root `text_style` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example, to update the text style to bold, set `fields` to `"bold"`. To reset a property to its default value, include its field name in the field mask but leave the field itself unset.';
            format: 'google-fieldmask';
            type: 'string';
          };
          range: {
            $ref: '#/components/schemas/Range';
            description: "The range of text to style. The range may be extended to include adjacent newlines. If the range fully contains a paragraph belonging to a list, the paragraph's bullet is also updated with the matching text style. Ranges cannot be inserted inside a relative UpdateTextStyleRequest.";
          };
          textStyle: {
            $ref: '#/components/schemas/TextStyle';
            description: 'The styles to set on the text. If the value for a particular style matches that of the parent, that style will be set to inherit. Certain text style changes may cause other changes in order to to mirror the behavior of the Docs editor. See the documentation of TextStyle for more information.';
          };
        };
        type: 'object';
      };
      WeightedFontFamily: {
        description: 'Represents a font family and weight of text.';
        properties: {
          fontFamily: {
            description: 'The font family of the text. The font family can be any font from the Font menu in Docs or from [Google Fonts] (https://fonts.google.com/). If the font name is unrecognized, the text is rendered in `Arial`.';
            type: 'string';
          };
          weight: {
            description: 'The weight of the font. This field can have any value that\'s a multiple of `100` between `100` and `900`, inclusive. This range corresponds to the numerical values described in the CSS 2.1 Specification, [section 15.6](https://www.w3.org/TR/CSS21/fonts.html#font-boldness), with non-numerical values disallowed. The default value is `400` ("normal"). The font weight makes up just one component of the rendered font weight. A combination of the `weight` and the text style\'s resolved `bold` value determine the rendered weight, after accounting for inheritance: * If the text is bold and the weight is less than `400`, the rendered weight is 400. * If the text is bold and the weight is greater than or equal to `400` but is less than `700`, the rendered weight is `700`. * If the weight is greater than or equal to `700`, the rendered weight is equal to the weight. * If the text is not bold, the rendered weight is equal to the weight.';
            format: 'int32';
            type: 'integer';
          };
        };
        type: 'object';
      };
      WriteControl: {
        description: 'Provides control over how write requests are executed.';
        properties: {
          requiredRevisionId: {
            description: 'The optional revision ID of the document the write request is applied to. If this is not the latest revision of the document, the request is not processed and returns a 400 bad request error. When a required revision ID is returned in a response, it indicates the revision ID of the document after the request was applied.';
            type: 'string';
          };
          targetRevisionId: {
            description: "The optional target revision ID of the document the write request is applied to. If collaborator changes have occurred after the document was read using the API, the changes produced by this write request are applied against the collaborator changes. This results in a new revision of the document that incorporates both the collaborator changes and the changes in the request, with the Docs server resolving conflicting changes. When using target revision ID, the API client can be thought of as another collaborator of the document. The target revision ID can only be used to write to recent versions of a document. If the target revision is too far behind the latest revision, the request is not processed and returns a 400 bad request error. The request should be tried again after retrieving the latest version of the document. Usually a revision ID remains valid for use as a target revision for several minutes after it's read, but for frequently edited documents this window might be shorter.";
            type: 'string';
          };
        };
        type: 'object';
      };
    };
    securitySchemes: {
      Oauth2: {
        description: 'Oauth 2.0 implicit authentication';
        flows: {
          implicit: {
            authorizationUrl: 'https://accounts.google.com/o/oauth2/auth';
            scopes: {
              'https://www.googleapis.com/auth/documents': 'See, edit, create, and delete all your Google Docs documents';
              'https://www.googleapis.com/auth/documents.readonly': 'See all your Google Docs documents';
              'https://www.googleapis.com/auth/drive': 'See, edit, create, and delete all of your Google Drive files';
              'https://www.googleapis.com/auth/drive.file': 'See, edit, create, and delete only the specific Google Drive files you use with this app';
              'https://www.googleapis.com/auth/drive.readonly': 'See and download all your Google Drive files';
            };
          };
        };
        type: 'oauth2';
      };
      Oauth2c: {
        description: 'Oauth 2.0 authorizationCode authentication';
        flows: {
          authorizationCode: {
            authorizationUrl: 'https://accounts.google.com/o/oauth2/auth';
            scopes: {
              'https://www.googleapis.com/auth/documents': 'See, edit, create, and delete all your Google Docs documents';
              'https://www.googleapis.com/auth/documents.readonly': 'See all your Google Docs documents';
              'https://www.googleapis.com/auth/drive': 'See, edit, create, and delete all of your Google Drive files';
              'https://www.googleapis.com/auth/drive.file': 'See, edit, create, and delete only the specific Google Drive files you use with this app';
              'https://www.googleapis.com/auth/drive.readonly': 'See and download all your Google Drive files';
            };
            tokenUrl: 'https://accounts.google.com/o/oauth2/token';
          };
        };
        type: 'oauth2';
      };
    };
  };
};