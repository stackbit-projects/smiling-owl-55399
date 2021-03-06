import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

import {Layout} from '../components/index';
import {htmlToReact, withPrefix, markdownify} from '../utils';

export default class Post extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
              <article className="post post-full">
                <header className="post-header inner-md">
                  <div className="post-meta">
                    <time className="published"
                      dateTime={moment(_.get(this.props, 'page.date', null)).strftime('%Y-%m-%d %H:%M')}>{moment(_.get(this.props, 'page.date', null)).strftime('%A, %B %e, %Y')}</time>
                  </div>
                  <h1 className="post-title">{_.get(this.props, 'page.title', null)}</h1>
                  {_.get(this.props, 'page.subtitle', null) && (
                  <div className="post-subtitle">
                    {htmlToReact(_.get(this.props, 'page.subtitle', null))}
                  </div>
                  )}
                </header>
                {_.get(this.props, 'page.content_img_path', null) && (
                <div className="post-thumbnail">
                  <img className="thumbnail" src={withPrefix(_.get(this.props, 'page.content_img_path', null))} alt={_.get(this.props, 'page.content_img_alt', null)} />
                </div>
                )}
                <div className="post-content inner-md">
                  {markdownify(_.get(this.props, 'page.content', null))}
                </div>
                
                {_.get(this.props, 'page.sectionImageWithText', null) && (
                <div className="post-content inner-md">
                  {htmlToReact(_.get(this.props, 'page.sectionImageWithText[0].heading', null))}
                  {markdownify(_.get(this.props, 'page.sectionImageWithText[0].text', null))}
                  {markdownify(_.get(this.props, 'page.sectionImageWithText[0].image.title', null))}
                  <img className="thumbnail" src={withPrefix(_.get(this.props, 'page.sectionImageWithText[0].image', null))} alt={_.get(this.props, 'page.sectionImageWithText[0].image.title', null)} />               
                  {htmlToReact(_.get(this.props, 'page.sectionImageWithText[1].heading', null))}
                  {markdownify(_.get(this.props, 'page.sectionImageWithText[1].text', null))}
                </div>
                )}
              </article>
            </Layout>
        );
    }
}
