<?php
/**
 * content.php
 * @version 	v.1.1
 * @since 		10/10/18
 */
?>
<div id="post-<?php the_ID(); ?>" class="pos-kolom" itemprop="mainEntity" itemscope itemtype="http://schema.org/Blog">

	<div class='pos-kartu'>
		<meta content="<?php echo get_the_post_thumbnail_url(get_the_ID(),'full'); ?>" itemprop="image"/>
		<meta content="<?php the_time('c'); ?>" itemprop="datePublished"/>
		<meta content="<?php the_modified_date('c'); ?>" itemprop="dateModified"/>
		<meta content="<?php echo get_the_author(); ?>" itemprop="name author"/>
		<div class="pos-gambar">
			<div class="ViewerTracks">
				<span> <i class="fa fa-eye"></i> <?php echo wpb_get_post_views(get_the_ID());?></span>
			</div>
			<a class="pos-link-gambar" href="<?php the_permalink(); ?>">
				<?php $cov = rwmb_meta("cp_image");if($cov) { ?>

					<img class='lazy attachment-postthumb' title='<?php the_title()?>' alt='<?php the_title()?>' width='100%' src='https://2.bp.blogspot.com/--Cvu_EesyJg/XCIh0dwr93I/AAAAAAAACLs/MQrcnCdiz2wtdo_qWr4QVGCuEYh7CwFCQCLcBGAs/s300/lazy.png' data-src="<?php echo $cov; ?>" />

				<?php } else { ?>
				<?php

					echo cp_thumb_content();
				?>
				<?php } ?>
			</a>
		</div>
		<div class='pos-konten'>
			<h2 class="pos-title" itemprop="headline">
				<?php the_title( sprintf( '<a href="%s" rel="bookmark">', esc_url( get_permalink() ) ), '</a>' ); ?>
			</h2>
			<div class="pos-konten-info">
				<?php
				global $anime_info;
				$kategori = get_the_category();
				$slug = $kategori[0]->slug ?: get_post($anime_info->ID, "post", true )->post_name;
				$anime_name = $kategori[0]->name ?: get_post($anime_info->ID, "post", true )->post_name;
				?>
					<span class='info-label'>Release :</span> <span class='info-value'><?php the_time('F jS, Y'); ?></span> <span class='info-label'>On Series :</span> <span class='info-value'><a title='<? echo $anime_name ?>' href='<?php  esc_url(home_url('/')); ?>/anime/<?php echo $slug ?>'><? echo $anime_name ?></a></span> <span class='info-label'>Posted by :</span> <span class='info-value'><?php the_author_posts_link(); ?></span>
<!-- 				<p>by <span class="cat-links"><?php the_author_posts_link(); ?></span></p> -->
				<!--<p><span class="fa fa-clock-o" aria-hidden="true"></span> <span><?php the_time('F jS, Y'); ?></span></p> -->
			</div>
<!-- 			<div class="pos-konten-snipet"> -->
					<?php// the_excerpt(); ?>
<!-- 			</div> -->
<!-- 			<div class='pos-konten-aksi'>
				
				<a class='d-button' href='<?php  esc_url(home_url('/')); ?>/anime/<?php echo $slug ?>'>Anime Info</a>
			</div> -->
		</div>


	</div>

	<div class='clear'></div>
</div>